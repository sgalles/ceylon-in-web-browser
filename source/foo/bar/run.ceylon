import ceylon.logging {
    addLogWriter,
    Priority,
    Category,
    info,
    Logger,
    logger
}
"Run the module `foo.bar`."

Logger initLogging(){
    addLogWriter {
        void log(Priority p, Category c, String m, Exception? e) {
            value print = p<=info 
            then process.writeLine 
            else process.writeError;
            print("[``system.milliseconds``] ``p.string`` ``m``");
            if (exists e) {
                printStackTrace(e, print);
            }
        }
    };
    return logger(`module foo.bar`);
}

Logger log = initLogging();


shared void hello() {
    log.info("Hello world !");
}