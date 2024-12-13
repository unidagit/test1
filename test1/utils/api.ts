export type BillionsListType = {
  id: string;
  name: string;
  squareImage: string;
  netWorth: number;
  industries: string[];
};

export const getBillionsList = async (): Promise<BillionsListType[]> => {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev/");
  const data = await response.json();
  return data;
};

export const getBillionsItem = async (
  id: string
): Promise<BillionsListType> => {
  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );
  const data = response.json();
  return data;
};
