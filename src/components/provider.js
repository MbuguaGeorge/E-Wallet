import React, {useEffect} from 'react';
import {ethers} from 'ethers';
import Ether from 'contracts/ether.sol/Send_Ether.json';

const Provider = () => {

    const contract_address = '0x5DB4C12A1B203a7d4CadF5986491c3C94A6665c8';
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contract_address, Ether.abi, provider);

    useEffect(() => {
        //const web = new ethers.providers.Web3Provider(window.ethereum);
        let prov = window.ethereum;

        if(typeof prov !== 'undefined'){
            prov.request({
                method: 'eth_requestAccounts'
            }).then(accounts => {console.log(accounts)}).catch((e)=>{
                console.log(e)
            })
        }
        main()

    });

    const main = async () => {
        //events
        contract.on("capture_owner", (owner, amount) => {
            console.log(`${owner} sent ${ethers.utils.formatEther(amount)} ETH`);
        });

    }

    return (
        <div>
            <h3>Your balance is </h3>
        </div>
    )
}

export default Provider;