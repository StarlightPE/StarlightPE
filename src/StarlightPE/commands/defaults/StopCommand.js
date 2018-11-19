const Command = starlightpe("command/Command");

class StopCommand extends Command {
    constructor(){
        super("stop", "Stops the server.", "starlightpe.command.stop", ["shutdown"]);
    }

    execute(sender, args){
        sender.getServer().shutdown();
    }
}

module.exports = StopCommand;
