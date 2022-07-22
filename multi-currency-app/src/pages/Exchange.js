const Exchange = () => {
    return (
      <div>Wallet
          <div class="profileSideBar">
            <i class="fas fa-user-tag"></i> 
            <p> Hello,
              <br> username/email</br>
            </p>
            <div class="navigationTab">
              <Link to="/dasboard" href="#">
                Dashboard
                </Link>
              <Link to="/wallet" href="#">
                Wallet
                </Link>
              <Link to="/exchange" href="#">
                Exchange
              </Link>
            </div>
          </div>
  
          <div class="balanceOverview">
            <label className="walletLabel" htmlFor="wallet">Wallet</label>
            <label className="amtExchangeLabel" htmlFor="amt">Amount to Exchange:</label>
            <label className="currencyExchangeLabel" htmlFor="currency">Currency to Exchange to:</label>
            {/* to double check on the button */}
            <div className="tabSubmitBtn">
              <button onClick={handleSubmit}>LOGIN</button> 
            </div>
          </div>
      </div>
      
      
    )
  }
  
  export default Exchange