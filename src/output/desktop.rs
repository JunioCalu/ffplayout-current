use std::process::{self, Command, Stdio};

use simplelog::*;

use crate::filter::v_drawtext;
use crate::utils::{GlobalConfig, Media};
use crate::vec_strings;

/// Desktop Output
///
/// Instead of streaming, we run a ffplay instance and play on desktop.
pub fn output(config: &GlobalConfig, log_format: &str) -> process::Child {
    let mut enc_filter: Vec<String> = vec![];

    let mut enc_cmd = vec_strings!["-hide_banner", "-nostats", "-v", log_format, "-i", "pipe:0"];

    if config.text.add_text && !config.text.over_pre {
        info!(
            "Using drawtext filter, listening on address: <yellow>{}</>",
            config.text.bind_address
        );

        let mut filter: String = "null,".to_string();
        filter.push_str(
            v_drawtext::filter_node(config, &mut Media::new(0, String::new(), false)).as_str(),
        );
        enc_filter = vec!["-vf".to_string(), filter];
    }

    enc_cmd.append(&mut enc_filter);

    debug!(
        "Encoder CMD: <bright-blue>\"ffplay {}\"</>",
        enc_cmd.join(" ")
    );

    let enc_proc = match Command::new("ffplay")
        .args(enc_cmd)
        .stdin(Stdio::piped())
        .stderr(Stdio::piped())
        .spawn()
    {
        Err(e) => {
            error!("couldn't spawn encoder process: {e}");
            panic!("couldn't spawn encoder process: {e}")
        }
        Ok(proc) => proc,
    };

    enc_proc
}