import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { CONTRACT_ADDRESS } from '../constants/';
import formatCapitalizaion from '../utils/formatCapitalizaion';
import contractABI from '../utils/contractABI';

const useFetchIndexes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [indexes, setIndexes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchedData = [];

    const fetchContract = async () => {
      let web3;

      if (!window.ethereum) {
        setError('Please install Metamask to continue!');
        return;
      }

      await window.ethereum.enable();
      web3 = new Web3(window.ethereum);

      const contract = new web3.eth.Contract(contractABI, CONTRACT_ADDRESS);

      const groupIds = await contract.methods.getGroupIds().call();

      for (const groupID of groupIds) {
        const group = await contract.methods.getGroup(groupID).call();

        const groupObject = {
          name: group.name,
          id: groupID,
          indexes: [],
        };

        for (const indexID of group.indexes) {
          const index = await contract.methods.getIndex(indexID).call();

          groupObject.indexes.push({
            name: index.name,
            ethPriceInWei: web3.utils.fromWei(index.ethPriceInWei, 'ether'),
            usdPriceInCents: index.usdPriceInCents / 100,
            usdCapitalization: formatCapitalizaion(index.usdCapitalization),
            percentageChange: Number(index.percentageChange),
          });
        }

        fetchedData.push(groupObject);
      }
      setIndexes(fetchedData);
      setIsLoading(false);
    };

    fetchContract();
  }, []);

  return [indexes, isLoading, error];
};

export default useFetchIndexes;
