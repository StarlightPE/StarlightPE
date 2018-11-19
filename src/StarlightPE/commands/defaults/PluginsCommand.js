const Command = starlightpe("command/Command");
const TextFormat = starlightpe("utils/TextFormat");

class PluginsCommand extends Command {
    constructor(){
        super("plugins", "List the plugins you have enabled on your server.", "starlightpe.command.plugins", ["pl"]);
    }

    execute(sender, args){
        let list = "";
        let plugins = sender.getServer().getPluginManager().getPlugins();
        plugins.forEach(plugin => {
            list += list.length > 0 ? TextFormat.WHITE + ", " : "";
            list += (plugin.isEnabled() ? TextFormat.LIGHT_PURPLE : TextFormat.RED) + plugin.getFullName();
        });

        sender.sendMessage("Plugin(s) (" + plugins.length + "): " + list);
    }
}

module.exports = PluginsCommand;
