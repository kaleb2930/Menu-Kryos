import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

world.afterEvents.itemUse.subscribe((e) => {
    if (e.itemStack.typeId === "minecraft:compass") {
        const player = e.source;
        const form = new ActionFormData()
            // O marcador "kg:dark" precisa estar no título
            .title(":status:Loja")
            .body("Escolha uma opção.")
            .button("Comprar itens")
            .button("Vender itens")
            .button("Fechar");

        form.show(player).then(response => {
            if (response.canceled) return;

            if (response.selection === 0) {
                player.sendMessage("Comprar itens");
            } else if (response.selection === 1) {
                player.sendMessage("Vender itens");
            }
        });
    }
})