import ceylon.logging {
    addLogWriter,
    Priority,
    Category,
    info,
    Logger,
    logger
}
"Run the module `foo.bar`."

Anything dummy = addLogWriter {
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

Logger log = logger(`module foo.bar`);


shared void hello() {
    log.info("Hello world !");
}