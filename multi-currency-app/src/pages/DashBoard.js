import "./Dashboard.css";

const DashBoard = () => {
  return (
    <div>
      <div class="profileSideBar"></div>
      <div class="mainContent">
        <div className="row">
          <div className="card w-100">
            <h2>Multi Currency Wallet Balance</h2>
            <p>$40.89 (SGD)</p>
            <p>72.12 (USD)</p>
          </div>
        </div>
        <p style={{color:'white', fontSize:'20px'}}>Currency Exchange Rate Table</p>
        <div className="row">

          <table class="w-100">
            <tr>
              <th>
                Currency
              </th>
              <th>
                Rate
              </th>
            </tr>
            <tr>
              <td>AUD</td>
              <td>1.89</td>
            </tr>
            <tr>
              <td>AUD</td>
              <td>1.89</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )

}

export default DashBoard