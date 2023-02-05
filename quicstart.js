import * as Kilt from "@kiltprotocol/sdk-js";
// import axios from "axios";

export async function main() {
  console.log("init");
  await Kilt.connect("wss://spiritnet.kilt.io/");

  const api = Kilt.ConfigService.get("api");
  const encodedJohnDoeDetails = await api.call.did.queryByWeb3Name("john_doe");

  // This function will throw if johnDoeOwner does not exist
  const {
    document: { uri },
  } = Kilt.Did.linkedInfoFromChain(encodedJohnDoeDetails);
  console.log(`My name is john_doe and this is my DID: "${uri}"`);
}

main();

