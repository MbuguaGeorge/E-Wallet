import React, {Component} from 'react';
import avatar from './img/avatar.jpg';
import bitcoin from './img/bitcoin.png';
import send from './img/right-arrow.png';
import swap from './img/switch.png';
import receive from './img/download.png';
import Ethereum from './img/ethereum.png';

class Demo extends Component{
    render(){
        return (
            <div className='my_wallet'>
                <div className='profile-pic'>
                    <label>BINARYPT</label>
                    <img src={avatar} alt='profile pic' />
                </div>
                <div className='wallet'>
                    <h1>My Wallet</h1>
                    <h2>Total Balance</h2>
                    <h3>$5,752.24</h3>
                    <div className='wallet-activities'>
                        <ul>
                            <li>
                                <img src={send} alt='send' width='20'/>
                                <label>Send</label>
                            </li>
                            <li>
                                <img src={receive} alt='receive' width='20'/>
                                <label>Receive</label>
                            </li>
                            <li>
                                <img src={swap} alt='swap' width='20'/>
                                <label>Swap</label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='marketplace'>
                    <h5>Top currencies this week</h5>
                    <div className='currency'>
                        <div className='logo'>
                            <img src={bitcoin} alt='btc' />
                        </div>
                        <div className='curr'>
                            <h4>Bitcoin</h4>
                            <p>BTC/USD</p>
                        </div>
                        <div className='value'>
                            <h3>$42,213.67</h3>
                        </div>
                    </div>
                    <div className='currency'>
                        <div className='logo'>
                            <img src={Ethereum} alt='btc' />
                        </div>
                        <div className='curr'>
                            <h4>Ethereum</h4>
                            <p>ETH/USD</p>
                        </div>
                        <div className='value'>
                            <h3>$42,213.67</h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Demo;