import "./ManageWallet.css";
import "./Dashboard.css";

const ManageWallet = () => {
  return (
<div>
<div class="profileSideBar"></div>
    <div class="mainContent">
        <h1 style={{color:'white', fontSize:'30px'}}>Manage Wallets</h1>
        
        <div className="row">
            <div className="card w-100">
              <button style={{float:'right', background:'transparent', border:'none' }}>x</button>
            <p>Main Wallet Balance:</p>
            <p>$40.89 (SGD)</p>
            <p>$72.12 (USD)</p>
            </div>
        </div><div className="row mg-top">
            <div className="card w-100">
            <button style={{float:'right'}}>x</button>
            <p>Multi Currency Wallet Balance:</p>
            <p>$40.89 (MYR)</p>
            <p>$72.12 (USD)</p>
            </div>
        </div>
    </div>
</div>
  )}
export default ManageWallet