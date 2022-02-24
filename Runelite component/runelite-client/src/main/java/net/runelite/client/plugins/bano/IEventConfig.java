package net.runelite.client.plugins.bano;

import net.runelite.client.config.Config;
import net.runelite.client.config.ConfigGroup;
import net.runelite.client.config.ConfigItem;

@ConfigGroup("bano")
public interface IEventConfig extends Config {
    @ConfigItem(
            position = 1,
            keyName = "eventUrl",
            name = "url",
            description = "a"
    )
    default String urlInput() {
        return "http://localhost:5000/Event/BingoEvent";
    }

    @ConfigItem(
            position = 2,
            keyName = "eventCode",
            name = "eventCode",
            description = "b"
    )
    default String eventCodeInput() {
        return "1A2B3C";
    }
    @ConfigItem(
            position = 3,
            keyName = "npcList",
            name = "boss",
            description = "c"
    )
    default String npcInput() {
        return "[{\"npcName\":\"Goblin\",\"items\":[\"Coins\",\"Bones\"]},{\"npcName\":\"Giant rat\",\"items\":[\"Raw rat meat\",\"Bones\"]}]";
    }
}
