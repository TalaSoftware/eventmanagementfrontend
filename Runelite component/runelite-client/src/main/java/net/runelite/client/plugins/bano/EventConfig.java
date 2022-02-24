package net.runelite.client.plugins.bano;

import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

public class EventConfig implements IEventConfig {
    public  Npc[] getValidNpcs(String config) {
        if(config==null||config.contains("false")){
            return null;
        }
        Gson gson = new Gson();
        Npc[] npcs = gson.fromJson(config,  Npc[].class);
        return npcs;
    }
}
