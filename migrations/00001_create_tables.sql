-- Add migration script here
PRAGMA foreign_keys = ON;

CREATE TABLE
    global (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        secret TEXT NOT NULL,
        UNIQUE (secret)
    );

CREATE TABLE
    roles (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        UNIQUE (name)
    );

CREATE TABLE
    channels (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        preview_url TEXT NOT NULL,
        extra_extensions TEXT NOT NULL DEFAULT 'jpg,jpeg,png',
        active INTEGER NOT NULL DEFAULT 0,
        last_date TEXT,
        time_shift REAL NOT NULL DEFAULT 0
    );

CREATE TABLE
    presets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        text TEXT NOT NULL,
        x TEXT NOT NULL,
        y TEXT NOT NULL,
        fontsize TEXT NOT NULL,
        line_spacing TEXT NOT NULL,
        fontcolor TEXT NOT NULL,
        box TEXT NOT NULL,
        boxcolor TEXT NOT NULL,
        boxborderw TEXT NOT NULL,
        alpha TEXT NOT NULL,
        channel_id INTEGER NOT NULL DEFAULT 1,
        FOREIGN KEY (channel_id) REFERENCES channels (id) ON UPDATE CASCADE ON DELETE CASCADE,
        UNIQUE (name)
    );

CREATE TABLE
    user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        mail TEXT NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL,
        role_id INTEGER NOT NULL DEFAULT 3,
        channel_id INTEGER NOT NULL DEFAULT 1,
        FOREIGN KEY (role_id) REFERENCES roles (id) ON UPDATE SET NULL ON DELETE SET NULL,
        FOREIGN KEY (channel_id) REFERENCES channels (id) ON UPDATE CASCADE ON DELETE CASCADE,
        UNIQUE (mail, username)
    );

CREATE TABLE
    configurations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        channel_id INTEGER NOT NULL DEFAULT 1,
        general_help TEXT NOT NULL DEFAULT "Sometimes it can happen, that a file is corrupt but still playable, this can produce an streaming error over all following files. The only way in this case is, to stop ffplayout and start it again. Here we only say when it stops, the starting process is in your hand. Best way is a systemd service on linux.\n'stop_threshold' stop ffplayout, if it is async in time above this value. A number below 3 can cause unexpected errors.",
        stop_threshold REAL NOT NULL DEFAULT 11.0,
        mail_help TEXT NOT NULL DEFAULT "Send error messages to email address, like missing playlist; invalid json format; missing clip path. Leave recipient blank, if you don't need this.\n'mail_level' can be INFO, WARNING or ERROR.\n'interval' means seconds until a new mail will be sended, value must be in increments of 10.",
        subject TEXT NOT NULL DEFAULT "Playout Error",
        smtp_server TEXT NOT NULL DEFAULT "mail.example.org",
        sender_addr TEXT NOT NULL DEFAULT "ffplayout@example.org",
        sender_pass TEXT NOT NULL DEFAULT "",
        recipient TEXT NOT NULL DEFAULT "",
        starttls INTEGER NOT NULL DEFAULT 0,
        mail_level TEXT NOT NULL DEFAULT "ERROR",
        interval INTEGER NOT NULL DEFAULT 120,
        logging_help TEXT NOT NULL DEFAULT "If 'log_to_file' is true, log to file, when is false log to console. \n'local_time' to false will set log timestamps to UTC. Path to /var/log/ only if you run this program as daemon.\n'level' can be DEBUG, INFO, WARNING, ERROR.\n'ffmpeg_level/ingest_level' can be INFO, WARNING, ERROR.\n'detect_silence' logs an error message if the audio line is silent for 15 seconds during the validation process.\n'ignore_lines' makes logging to ignore strings that contains matched lines, in frontend is a semicolon separated list.",
        ffmpeg_level TEXT NOT NULL DEFAULT "ERROR",
        ingest_level TEXT NOT NULL DEFAULT "ERROR",
        detect_silence INTEGER NOT NULL DEFAULT 1,
        ignore_lines TEXT NOT NULL DEFAULT "P sub_mb_type 4 out of range at;error while decoding MB;negative number of zero coeffs at;out of range intra chroma pred mode;non-existing SPS 0 referenced in buffering period",
        processing_help TEXT NOT NULL DEFAULT "Default processing for all clips, to have them unique. Mode can be playlist or folder.\n'aspect' must be a float number.'logo' is only used if the path exist.\n'logo_scale' scale the logo to target size, leave it blank when no scaling is needed, format is 'width:height', for example '100:-1' for proportional scaling. With 'logo_opacity' logo can become transparent.\nWith 'audio_tracks' it is possible to configure how many audio tracks should be processed.\n'audio_channels' can be use, if audio has more channels then only stereo.\nWith 'logo_position' in format 'x:y' you set the logo position.\nWith 'custom_filter' it is possible, to apply further filters. The filter outputs should end with [c_v_out] for video filter, and [c_a_out] for audio filter.",
        processing_mode TEXT NOT NULL DEFAULT "playlist",
        audio_only INTEGER NOT NULL DEFAULT 0,
        copy_audio INTEGER NOT NULL DEFAULT 0,
        copy_video INTEGER NOT NULL DEFAULT 0,
        width INTEGER NOT NULL DEFAULT 1280,
        height INTEGER NOT NULL DEFAULT 720,
        aspect REAL NOT NULL DEFAULT 1.778,
        fps REAL NOT NULL DEFAULT 25.0,
        add_logo INTEGER NOT NULL DEFAULT 1,
        logo TEXT NOT NULL DEFAULT "/usr/share/ffplayout/logo.png",
        logo_scale TEXT NOT NULL DEFAULT "",
        logo_opacity REAL NOT NULL DEFAULT 0.7,
        logo_position TEXT NOT NULL DEFAULT "W-w-12:12",
        audio_tracks INTEGER NOT NULL DEFAULT 1,
        audio_track_index INTEGER NOT NULL DEFAULT -1,
        audio_channels INTEGER NOT NULL DEFAULT 2,
        volume REAL NOT NULL DEFAULT 1.0,
        decoder_filter TEXT NOT NULL DEFAULT "",
        ingest_help "Run a server for a ingest stream. This stream will override the normal streaming until is done. There is only a very simple authentication mechanism, which check if the stream name is correct.\n'custom_filter' can be used in the same way then the one in the process section.",
        ingest_enable INTEGER NOT NULL DEFAULT 0,
        ingest_param TEXT NOT NULL DEFAULT "-f live_flv -listen 1 -i rtmp://127.0.0.1:1936/live/stream",
        ingest_filter TEXT NOT NULL DEFAULT "",
        playlist_help TEXT NOT NULL DEFAULT "'path' can be a path to a single file, or a directory. For directory put only the root folder, for example '/playlists', subdirectories are read by the program. Subdirectories needs this structure '/playlists/2018/01'.\n'day_start' means at which time the playlist should start, leave day_start blank when playlist should always start at the begin. 'length' represent the target length from playlist, when is blank real length will not consider.\n'infinit: true' works with single playlist file and loops it infinitely.",
        playlist_path TEXT NOT NULL DEFAULT "/var/lib/ffplayout/playlists",
        day_start TEXT NOT NULL DEFAULT "05:59:25",
        length TEXT NOT NULL DEFAULT "24:00:00",
        infinit INTEGER NOT NULL DEFAULT 0,
        storage_help TEXT NOT NULL DEFAULT "'filler' is for playing instead of a missing file or fill the end to reach 24 hours, can be a file or folder, it will loop when is necessary.\n'extensions' search only files with this extension. Set 'shuffle' to 'true' to pick files randomly.",
        storage_path TEXT NOT NULL DEFAULT "/var/lib/ffplayout/tv-media",
        filler TEXT NOT NULL DEFAULT "/var/lib/ffplayout/tv-media/filler/filler.mp4",
        extensions TEXT NOT NULL DEFAULT "mp4;mkv;webm",
        shuffle INTEGER NOT NULL DEFAULT 1,
        text_help TEXT NOT NULL DEFAULT "Overlay text in combination with libzmq for remote text manipulation. On windows fontfile path need to be like this 'C\\:/WINDOWS/fonts/DejaVuSans.ttf'.\n'text_from_filename' activate the extraction from text of a filename. With 'style' you can define the drawtext parameters like position, color, etc. Post Text over API will override this. With 'regex' you can format file names, to get a title from it.",
        add_text INTEGER NOT NULL DEFAULT 1,
        text_from_filename INTEGER NOT NULL DEFAULT 0,
        fontfile TEXT NOT NULL DEFAULT "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
        style TEXT NOT NULL DEFAULT "x=(w-tw)/2:y=(h-line_h)*0.9:fontsize=24:fontcolor=#ffffff:box=1:boxcolor=#000000:boxborderw=4",
        regex TEXT NOT NULL DEFAULT "^.+[/\\](.*)(.mp4|.mkv|.webm)$",
        task_help TEXT NOT NULL DEFAULT "Run an external program with a given media object. The media object is in json format and contains all the information about the current clip. The external program can be a script or a binary, but should only run for a short time.",
        task_enable INTEGER NOT NULL DEFAULT 0,
        task_path TEXT NOT NULL DEFAULT "",
        output_help TEXT NOT NULL DEFAULT "The final playout compression. Set the settings to your needs. 'mode' has the options 'desktop', 'hls', 'null', 'stream'. Use 'stream' and adjust 'output_param:' settings when you want to stream to a rtmp/rtsp/srt/... server.\nIn production don't serve hls playlist with ffplayout, use nginx or another web server!",
        output_mode TEXT NOT NULL DEFAULT "hls",
        output_param TEXT NOT NULL DEFAULT "-c:v libx264 -crf 23 -x264-params keyint=50:min-keyint=25:scenecut=-1 -maxrate 1300k -bufsize 2600k -preset faster -tune zerolatency -profile:v Main -level 3.1 -c:a aac -ar 44100 -b:a 128k -flags +cgop -f hls -hls_time 6 -hls_list_size 600 -hls_flags append_list+delete_segments+omit_endlist -hls_segment_filename /usr/share/ffplayout/public/live/stream-%d.ts /usr/share/ffplayout/public/live/stream.m3u8",
        FOREIGN KEY (channel_id) REFERENCES channels (id) ON UPDATE CASCADE ON DELETE CASCADE
    );

CREATE TABLE
    advanced_configurations (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        channel_id INTEGER NOT NULL DEFAULT 1,
        decoder_input_param TEXT,
        decoder_output_param TEXT,
        encoder_input_param TEXT,
        ingest_input_param TEXT,
        deinterlace TEXT,
        pad_scale_w TEXT,
        pad_scale_h TEXT,
        pad_video TEXT,
        fps TEXT,
        scale TEXT,
        set_dar TEXT,
        fade_in TEXT,
        fade_out TEXT,
        overlay_logo_scale TEXT,
        overlay_logo_fade_in TEXT,
        overlay_logo_fade_out TEXT,
        overlay_logo TEXT,
        tpad TEXT,
        drawtext_from_file TEXT,
        drawtext_from_zmq TEXT,
        aevalsrc TEXT,
        afade_in TEXT,
        afade_out TEXT,
        apad TEXT,
        volume TEXT,
        split TEXT,
        FOREIGN KEY (channel_id) REFERENCES channels (id) ON UPDATE CASCADE ON DELETE CASCADE
    );

-------------------------------------------------------------------------------
-- set defaults
INSERT INTO
    roles (name)
VALUES
    ('global_admin'),
    ('channel_admin'),
    ('user'),
    ('guest');

INSERT INTO
    channels (name, preview_url, extra_extensions, active)
VALUES
    (
        'Channel 1',
        'http://127.0.0.1:8787/live/stream.m3u8',
        'jpg,jpeg,png',
        0
    );

INSERT INTO
    presets (
        name,
        text,
        x,
        y,
        fontsize,
        line_spacing,
        fontcolor,
        box,
        boxcolor,
        boxborderw,
        alpha,
        channel_id
    )
VALUES
    (
        'Default',
        'Wellcome to ffplayout messenger!',
        '(w-text_w)/2',
        '(h-text_h)/2',
        '24',
        '4',
        '#ffffff@0xff',
        '0',
        '#000000@0x80',
        '4',
        '1.0',
        '1'
    ),
    (
        'Empty Text',
        '',
        '0',
        '0',
        '24',
        '4',
        '#000000',
        '0',
        '#000000',
        '0',
        '0',
        '1'
    ),
    (
        'Bottom Text fade in',
        'The upcoming event will be delayed by a few minutes.',
        '(w-text_w)/2',
        '(h-line_h)*0.9',
        '24',
        '4',
        '#ffffff',
        '1',
        '#000000@0x80',
        '4',
        'ifnot(ld(1),st(1,t));if(lt(t,ld(1)+1),0,if(lt(t,ld(1)+2),(t-(ld(1)+1))/1,if(lt(t,ld(1)+8),1,if(lt(t,ld(1)+9),(1-(t-(ld(1)+8)))/1,0))))',
        '1'
    ),
    (
        'Scrolling Text',
        'We have a very important announcement to make.',
        'ifnot(ld(1),st(1,t));if(lt(t,ld(1)+1),w+4,w-w/12*mod(t-ld(1),12*(w+tw)/w))',
        '(h-line_h)*0.9',
        '24',
        '4',
        '#ffffff',
        '1',
        '#000000@0x80',
        '4',
        '1.0',
        '1'
    );

INSERT INTO
    configurations DEFAULT
VALUES;

INSERT INTO
    advanced_configurations DEFAULT
VALUES;
