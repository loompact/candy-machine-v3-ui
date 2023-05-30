import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";

export const network = (process.env.NEXT_PUBLIC_SOLANA_NETWORK ||
  WalletAdapterNetwork.Devnet) as WalletAdapterNetwork;

export const rpcHost =
  process.env.NEXT_PUBLIC_RPC_HOST || clusterApiUrl(network);

export const candyMachineId = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ||
    "Dk5DF2QdaHzqzYWmkp5bGuBuzB1a9yfd7MnLCGAVw6CW"
);

export const defaultGuardGroup =
  process.env.NEXT_PUBLIC_DEFAULT_GUARD_GROUP || undefined; // undefined means default

// insert at least one wallet ID here - must not be left blank
export const whitelistedWallets = [
  "Ef2u5sf1HA4eZZvcryNkL3HheerwJX87Z3MMVhDB3v3s",
];

export const collectionImageURL =
  process.env.NEXT_PUBLIC_COLLECTION_IMAGE_URL || "https://images.pexels.com/photos/2832432/pexels-photo-2832432.png";

export const collectionTitle =
  process.env.NEXT_PUBLIC_COLLECTION_TITLE || "Collection Name";

export const collectionDescription =
  process.env.NEXT_PUBLIC_COLLECTION_DESCRIPTION || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

export const tokenType =
  process.env.NEXT_PUBLIC_TOKEN_TYPE || "Token";

export const websiteURL =
  process.env.NEXT_PUBLIC_WEBSITE_URL || "#";

export const twitterURL =
  process.env.NEXT_PUBLIC_TWITTER_URL || "#";

export const discordURL =
  process.env.NEXT_PUBLIC_DISCORD_URL || "#";

export const crossmintID =
  process.env.NEXT_PUBLIC_CROSSMINT_ID || null;

export const crossmintNET =
process.env.NEXT_PUBLIC_CROSSMINT_NET || null;