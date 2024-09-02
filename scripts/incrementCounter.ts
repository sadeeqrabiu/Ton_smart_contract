import { NetworkProvider, sleep } from "@ton/blueprint";
import { Counter } from "../wrappers/Counter";
import { Address, toNano } from "@ton/core";


export async function run(provider: NetworkProvider){


    const counter = provider.open(Counter.fromAddress(Address.parse("0QA8fR_EYMp12C9VDDUamQCyzqAd6aCA5xuSqQ4d8phTKP_M")));

    const counterBefore = await counter.getCounter();
    console.log("counter before:", counterBefore);


    await counter.send(
        provider.sender(),
        {
            value: toNano("0.05")
        },
        {
            $$type: "Add",
            queryId: 0n,
            amount: 1n,
        }
    );

    let counterAfter = await counter.getCounter();
    let attempt = 1;
    while(counterAfter === counterBefore){
        console.log("Incrementing Counter, attempt", attempt);
        await sleep(2000);
        counterAfter = await counter.getCounter();
        attempt++;
    }

    console.log("Counter after", counterAfter);
}

