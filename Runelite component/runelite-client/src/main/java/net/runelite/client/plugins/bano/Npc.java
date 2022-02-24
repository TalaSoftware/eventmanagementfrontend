package net.runelite.client.plugins.bano;

import com.google.gson.Gson;
import okhttp3.*;

import java.io.IOException;
import java.util.List;

public class Npc {
    List<String> items;
    String npcName;
    boolean isKilled = false;

    public void setKilled(String killedNpcName, boolean isKilled) {
        if (npcName.contains(killedNpcName)) {
            this.isKilled = isKilled;
        }
    }

    public void isItemValid(String username, String spawnedItemName) {
        if (isKilled) {
            if (items.contains(spawnedItemName)) {
                EventConfig eventConfig = new EventConfig();
                String url = eventConfig.urlInput();
                NpcRecord npcRecord = new NpcRecord();
                npcRecord.username=username;
                npcRecord.eventCode = eventConfig.eventCodeInput();
                npcRecord.npcName=npcName;
                npcRecord.items.add(spawnedItemName);
                Gson gson = new Gson();
                String body = gson.toJson(npcRecord);

                try{
                    call(url, body);
                }catch (Exception e){

                }
            }
        }
    }

    private void call(String url, String body) throws IOException {
        OkHttpClient client = new OkHttpClient.Builder().retryOnConnectionFailure(true).build();
        RequestBody requestBody = RequestBody.create(
                MediaType.get("application/json; charset=utf-8"),
                body
        );
        Request request = new Request.Builder()
                .url(url)

                .post(requestBody)
                .build();
        try (Response response = client.newCall(request).execute()) {
            System.out.println("resonse "+response.body().string());
        }
    }
}
