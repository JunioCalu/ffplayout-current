export default {
    ok: 'Ok',
    cancel: 'Abbrechen',
    socketConnected: 'Event Stream verbunden',
    socketDisconnected: 'Event Stream nicht verbunden',
    alert: {
        wrongLogin: 'Falsche Anmeldedaten!',
    },
    button: {
        login: 'Anmelden',
        home: 'Start',
        player: 'Wiedergabe',
        media: 'Medien',
        message: 'Nachrichten',
        logging: 'Protokollierung',
        channels: 'Kanäle',
        configure: 'Einstellungen',
        logout: 'Abmelden',
    },
    error: {
        notFound: 'Seite nicht gefunden',
        serverError: 'Interner Server Fehler',
    },
    input: {
        username: 'Benutzername',
        password: 'Passwort',
    },
    system: {
        cpu: 'CPU',
        cores: 'Kerne',
        load: 'Auslastung',
        memory: 'Arbeitsspeicher',
        swap: 'Auslagerungsspeicher',
        total: 'Gesamt',
        usage: 'Verwendung',
        network: 'Netzwerk',
        in: 'Eingehend',
        out: 'Ausgehend',
        storage: 'Speicher',
        device: 'Gerät',
        size: 'Größe',
        used: 'Genutzt',
    },
    control: {
        noClip: 'Es wird kein Clip abgespielt',
        ingest: 'Live-Übertragung',
        start: 'Playout-Dienst starten',
        last: 'Zum letzten Clip springen',
        stop: 'Playout-Dienst stoppen',
        reset: 'Playout-Zustand zurücksetzen',
        restart: 'Playout-Dienst neu starten',
        next: 'Zum nächsten Clip springen',
    },
    player: {
        start: 'Start',
        file: 'Datei',
        play: 'Abspielen',
        title: 'Titel',
        duration: 'Dauer',
        total: 'Gesamt',
        in: 'Eingang',
        out: 'Ausgang',
        ad: 'Werbung',
        edit: 'Bearbeiten',
        delete: 'Löschen',
        copy: 'Wiedergabeliste kopieren',
        loop: 'Clips in {date} Wiedergabeliste wiederholen',
        remote: 'Externe Quelle zur Wiedergabeliste hinzufügen',
        import: 'Text-/m3u-Datei importieren',
        generate: 'Einfacher und erweiterter Wiedergabelisten-Generator',
        reset: 'Wiedergabeliste zurücksetzen',
        save: 'Wiedergabeliste speichern',
        deletePlaylist: 'Wiedergabeliste löschen',
        unsavedProgram: 'Es existiert Programm das nicht gespeichert ist!',
        copyTo: 'Kopiere aktuelles Programm nach',
        addEdit: 'Quelle hinzufügen/bearbeiten',
        audio: 'Audio',
        customFilter: 'Benutzerdefinierter Filter',
        deleteFrom: 'Programm löschen von',
        deleteSuccess: 'Wiedergabeliste gelöscht...',
        generateProgram: 'Programm generieren',
        simple: 'Einfach',
        advanced: 'Erweitert',
        sorted: 'Sortiert',
        shuffle: 'Zufall',
        shift: 'Zeitverschiebung',
        all: 'Alle',
        addBlock: 'Zeitblock hinzufügen',
        infinitInfo: 'Die Wiedergabe läuft im unendlichen Modus. Es sind keine zeitbasierten Informationen möglich.',
        generateDone: 'Wiedergabeliste generieren erledigt...',
        dateYesterday: 'Aktuelle Uhrzeit liegt vor der Playlist-Startzeit!',
    },
    media: {
        notExists: 'Speicher existiert nicht!',
        create: 'Ordner erstellen',
        upload: 'Dateien hochladen',
        delete: 'Lösche',
        file: 'Datei',
        folder: 'Ordner',
        deleteQuestion: 'Sind Sie sicher, dass Sie löschen möchten',
        preview: 'Vorschau',
        rename: 'Datei umbenennen',
        newFile: 'Neuer Dateiname',
        createFolder: 'Ordner erstellen',
        foldername: 'Ordnername',
        current: 'Aktuell',
        overall: 'Insgesamt',
        uploading: 'Hochladen',
        moveError: 'Fehler beim Verschieben',
        deleteError: 'Löschfehler',
        folderExists: 'Ordner existiert bereits',
        folderCreate: 'Ordner erstellen abgeschlossen...',
        folderError: 'Fehler beim Erstellen des Ordners',
        uploadError: 'Fehler beim Hochladen',
        fileExists: 'Datei existiert bereits!',
        recursive: 'Rekursiv',
    },
    message: {
        savePreset: 'Voreinstellung speichern',
        newPreset: 'Neue Voreinstellung',
        delPreset: 'Voreinstellung löschen',
        delText: 'Sind Sie sicher, dass Sie die Voreinstellung löschen möchten',
        placeholder: 'Nachricht',
        xAxis: 'X-Achse',
        yAxis: 'Y-Achse',
        showBox: 'Box anzeigen',
        boxColor: 'Boxfarbe',
        boxAlpha: 'Box-Transparenz',
        size: 'Größe',
        spacing: 'Abstand',
        overallAlpha: 'Gesamttransparenz',
        fontColor: 'Schriftfarbe',
        fontAlpha: 'Schrifttransparenz',
        borderWidth: 'Rahmenbreite',
        send: 'Senden',
        name: 'Name',
        saveDone: 'Voreinstellung gespeichert!',
        saveFailed: 'Voreinstellung speichern fehlgeschlagen!',
        sendDone: 'Erfolgreich gesendet...',
        sendFailed: 'Senden fehlgeschlagen...',
    },
    log: {
        download: 'Protokoll herunterladen',
        reload: 'Neu laden',
    },
    advanced: {
        title: 'Advanced Configuration',
        decoder: 'Decoder',
        encoder: 'Encoder',
        filter: 'Filter',
        ingest: 'Ingest',
        updateSuccess: 'Update advanced config success!',
        updateFailed: 'Update advanced config failed!',
        warning: 'Warning! These settings are experimental and only intended for advanced users who are familiar with ffmpeg. Only change the settings here if you are sure of what you are doing! The settings can make the system unstable.',
    },
    config: {
        channel: 'Kanal',
        user: 'Benutzer',
        channelConf: 'Kanal-Konfiguration',
        addChannel: 'Neuen Kanal hinzufügen',
        name: 'Name',
        previewUrl: 'Vorschau-URL',
        extensions: 'Zusätzliche Erweiterungen',
        save: 'Speichern',
        delete: 'Löschen',
        updateChannelSuccess: 'Kanal-Konfiguration erfolgreich aktualisiert!',
        updateChannelFailed: 'Fehler beim Aktualisieren der Kanal-Konfiguration!',
        errorChannelDelete: 'Der erste Kanal kann nicht gelöscht werden!',
        deleteChannelSuccess: 'Kanal-Konfiguration erfolgreich gelöscht!',
        deleteChannelFailed: 'Fehler beim Löschen der Kanal-Konfiguration!',
        playoutConf: 'Playout-Konfiguration',
        general: 'Allgemein',
        rpcServer: 'RPC Server',
        mail: 'EMail',
        logging: 'Protokollierung',
        processing: 'Verarbeitung',
        ingest: 'Live-Eingang',
        playlist: 'Wiedergabeliste',
        storage: 'Speicher',
        text: 'Text',
        task: 'Aufgabe',
        output: 'Ausgabe',
        placeholderPass: 'Passwort',
        help: 'Hilfe',
        generalHelp: `Manchmal kann es vorkommen, dass eine Datei beschädigt ist, aber dennoch abspielbar. Dies kann einen Streaming-Fehler für alle folgenden Dateien verursachen. Die einzige Lösung in diesem Fall ist, ffplayout zu stoppen und es erneut zu starten.
        'stop_threshold' stoppt ffplayout, wenn es asynchron in der Zeit über diesen Wert hinaus ist. Ein Wert unter 3 kann unerwartete Fehler verursachen.`,
        mailHelp: `Sende Fehlermeldungen an eine E-Mail-Adresse, wie z.B. fehlende Clips, fehlendes oder ungültiges Playlist-Format usw. Lass den Empfänger leer, wenn dies nicht benötigt wird.
        'mail_level' kann INFO, WARNING oder ERROR sein.
        'interval' bezieht sich auf die Anzahl der Sekunden bis zur nächsten E-Mail; der Wert muss in Schritten von 10 erfolgen und darf nicht weniger als 30 Sekunden betragen.`,
        logHelp: `'ffmpeg_level/ingest_level' kann INFO, WARNING oder ERROR sein.
        'detect_silence' protokolliert eine Fehlermeldung, wenn die Audioleitung während des Validierungsprozesses 15 Sekunden lang stumm ist.
        'ignore' erlaubt dem Protokoll, Zeichenfolgen zu ignorieren, die übereinstimmende Zeilen enthalten; das Format ist eine durch Semikolons getrennte Liste.`,
        processingHelp: `Die Standardverarbeitung für alle Clips sorgt für Einzigartigkeit. Der Modus kann entweder 'playlist' oder 'folder' sein.
        Der Parameter 'aspect' muss eine Gleitkommazahl sein.
        Der Parameter 'audio_tracks' gibt an, wie viele Audiotracks verarbeitet werden sollen. 'audio_channels' kann verwendet werden, wenn das Audio mehr als Stereo-Kanäle hat.
        Das 'logo' wird nur verwendet, wenn der Pfad existiert; der Pfad ist relativ zu deinem Speicherordner.
        'logo_scale' skaliert das Logo auf die Zielgröße. Lasse es leer, wenn keine Skalierung erforderlich ist. Das Format ist 'Breite:Höhe', z.B. '100:-1' für proportionale Skalierung. Die Option 'logo_opacity' ermöglicht es, das Logo transparent zu machen. Die 'logo_position' wird im Format 'x:y' angegeben, was die Position des Logos festlegt.
        Mit 'custom_filter' ist es möglich, zusätzliche Filter anzuwenden. Die Filterausgaben sollten mit [c_v_out] für Video-Filter und [c_a_out] für Audio-Filter enden.
        'vtt_enable' kann nur im HLS-Modus verwendet werden, und nur wenn *.vtt-Dateien mit demselben Dateinamen wie die Videodatei existieren.`,
        ingestHelp: `Starte einen Server für einen Eingabestream. Dieser Stream überschreibt den normalen Stream, bis er beendet ist. Es gibt nur einen sehr einfachen Authentifizierungsmechanismus, der überprüft, ob der Stream-Name korrekt ist.
        'custom_filter' kann auf die gleiche Weise verwendet werden wie der im Verarbeitungsabschnitt.`,
        playlistHelp: `'day_start' gibt an, zu welcher Zeit die Playlist starten soll; lass 'day_start' leer, wenn die Playlist immer am Anfang starten soll. 'length' stellt die Ziellänge der Playlist dar; wenn es leer ist, wird die reale Länge nicht berücksichtigt.
        'infinite: true' funktioniert mit einer einzigen Playlist-Datei und schleift sie unendlich.`,
        storageHelp: `'filler' wird verwendet, um anstelle einer fehlenden Datei oder zur Auffüllung der verbleibenden Zeit auf insgesamt 24 Stunden abzuspielen. Es kann eine Datei oder ein Ordner sein und wird bei Bedarf wiederholt.
        'extensions' gibt an, nach welchen Dateien anhand dieser Erweiterung gesucht werden soll. Aktiviere 'shuffle', um Dateien zufällig auszuwählen.`,
        textHelp: `Überlagere Text in Kombination mit libzmq zur Fernmanipulation von Text. 'font' ist ein relativer Pfad zu deinem Speicherordner.
        'text_from_filename' aktiviert die Extraktion von Text aus einem Dateinamen. Mit 'style' kannst du die Drawtext-Parameter wie Position, Farbe usw. definieren. Die Übermittlung von Text über die API überschreibt dies. Mit 'regex' kannst du Dateinamen formatieren, um einen Titel daraus zu extrahieren.`,
        taskHelp: `Führe ein externes Programm mit einem angegebenen Medienobjekt aus. Das Medienobjekt ist im JSON-Format und enthält alle Informationen über den aktuellen Clip. Das externe Programm kann ein Skript oder eine Binärdatei sein, aber es sollte nur für kurze Zeit ausgeführt werden.`,
        outputHelp: `Das endgültige Playout-Encoding, passe die Einstellungen nach deinen Bedürfnissen an. 'mode' hat die Optionen 'desktop', 'hls', 'null' und 'stream'. Verwende 'stream' und passe die 'output_param:'-Einstellungen an, wenn du an einen RTMP/RTSP/SRT/...-Server streamen möchtest.
        In der Produktion solltest du keine HLS-Playlists mit ffplayout bereitstellen; verwende Nginx oder einen anderen Webserver!`,
        restartTile: 'Playout neustarten',
        restartText: 'ffplayout neustarten um Einstellungen anzuwenden?',
        updatePlayoutSuccess: 'Update der Playout-Konfiguration erfolgreich!',
        updatePlayoutFailed: 'Update playout config fehlgeschlagen!',
        forbiddenPlaylistPath: 'Zugriff untersagt: Playlist-Ordner kann nicht geöffnet werden.',
        noPlayoutConfig: 'Keine Playout-Konfiguration gefunden!',
        publicPath: 'Public (HLS) Pfad',
        playlistPath: 'Wiedergabelistenpfad',
        storagePath: 'Speicherpfad',
        sharedStorage: 'Gemeinsamer Speicher ist aktiviert, verwende denselben Speicherstamm für alle Kanäle!',
    },
    user: {
        title: 'Benutzer-Konfiguration',
        add: 'Benutzer hinzufügen',
        delete: 'Löschen',
        name: 'Benutzername',
        mail: 'E-Mail',
        password: 'Passwort',
        newPass: 'Neues Passwort',
        confirmPass: 'Passwort bestätigen',
        save: 'Speichern',
        admin: 'Administrator',
        deleteNotPossible: 'Löschen des aktuellen Benutzers nicht möglich!',
        deleteSuccess: 'Benutzer erfolgreich gelöscht!',
        deleteError: 'Fehler beim Löschen des Benutzers',
        addSuccess: 'Benutzer erfolgreich hinzugefügt!',
        addFailed: 'Fehler beim Hinzufügen des Benutzers!',
        mismatch: 'Passwort stimmt nicht überein!',
        updateSuccess: 'Benutzerprofil erfolgreich aktualisiert!',
        updateFailed: 'Fehler beim Aktualisieren des Benutzerprofils!',
    },
}
