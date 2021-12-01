import { Request, Response } from "express";
import { LCDClient } from "@terra-money/terra.js";

const getTotalSupply = async (req: Request, res: Response) => {
  const contractAddress = "terra1m3tdguf59xq3pa2twk5fjte5g6szj5y9x5npy7";
  const terra = new LCDClient({
    URL: "https://lcd.terra.dev",
    chainID: "columbus-5",
  });

  const result: any = await terra.wasm.contractQuery(contractAddress, {
    token_info: {},
  });

  return res.status(200).json({
    totalSupply: (
      Number(result.total_supply) /
      10 ** Number(result.decimals)
    ).toLocaleString(),
  });
};

export default {
  getTotalSupply,
};
