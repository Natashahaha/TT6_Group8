const DashBoard = () => {
  return (
    <div>DashBoard
        <div class="profileSideBar">
          <i class="fas fa-user-tag"></i> 
          <p> Hello,
            <br> username/email</br>
          </p>
          <div class="navigationTab">
            {/* <Link to="/dasboard" href="#">
              Dashboard
              </Link>
            <Link to="/wallet" href="#">
              Wallet
              </Link>
            <Link to="/exchange" href="#">
              Exchange
            </Link> */}
          </div>
        </div>

        <div>
        <div class="balanceOverview"></div>
        </div>
    </div>
    
    
  )
}

export default DashBoard