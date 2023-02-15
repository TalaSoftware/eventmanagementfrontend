package net.runelite.client.plugins.bano;


import com.google.inject.Provides;
import lombok.extern.slf4j.Slf4j;
import net.runelite.api.Client;
import net.runelite.api.GameState;
import net.runelite.api.NPC;
import net.runelite.client.config.ConfigManager;
import net.runelite.client.eventbus.Subscribe;
import net.runelite.client.events.ConfigChanged;
import net.runelite.client.events.NpcLootReceived;
import net.runelite.client.game.ItemManager;
import net.runelite.client.game.ItemStack;
import net.runelite.client.plugins.Plugin;
import net.runelite.client.plugins.PluginDescriptor;

import javax.inject.Inject;
import java.util.Collection;
import java.util.Iterator;

@Slf4j
@PluginDescriptor(
        name = "BAN plugin"
)
public class EventPlugin extends Plugin {
    @Inject
    private ItemManager itemManager;
    @Inject
    private Client client;
    @Inject
    private EventConfig eventConfig;

    private Npc[] validNpcs;

    @Subscribe
    public void onConfigChanged(ConfigChanged configChanged) {
        validNpcs = eventConfig.getValidNpcs(configChanged.getNewValue());
    }

    @Subscribe
    private void onNpcLootReceived​(NpcLootReceived npcLootReceived) {
        if (client.getGameState() != GameState.LOGGED_IN || validNpcs == null) {
            return;
        }
        NPC npc = npcLootReceived.getNpc();
        String killedNpcName = npc.getName();

        for (int i = 0; i < validNpcs.length; i++) {
            boolean isKilled = true;
            validNpcs[i].setKilled(killedNpcName, isKilled);
        }

        Collection<ItemStack> lootList = npcLootReceived.getItems();
        Iterator iterator = lootList.iterator();
        while (iterator.hasNext()) {
            ItemStack item = (ItemStack) iterator.next();
            int itemId = item.getId();
            String itemName = getItemName(itemId);
            String username = client.getLocalPlayer().getName();
            for (int i = 0; i < validNpcs.length; i++) {
                validNpcs[i].isItemValid(username, itemName);
            }
        }

        for (int i = 0; i < validNpcs.length; i++) {
            boolean isKilled = false;
            validNpcs[i].setKilled(killedNpcName, isKilled);
        }
    }

    private String getItemName(int itemId) {
        return itemManager.getItemComposition(itemId).getName();
    }

    @Provides
    IEventConfig provideConfig(ConfigManager configManager) {
        return configManager.getConfig(IEventConfig.class);
    }
}
