import React, { Component } from 'react'
class Footer extends Component {
  render() {
    return (
      <div className="relative flex h-[60px] w-full overflow-hidden border-t border-[#312e37] ">
        <div className="relative flex items-center justify-between flex-row w-full h-full p-6">
          <div className=" relative flex  ">2024© Frenify Team</div>
          <div className="relative flex flex-row items-center gap-10">
            <div className="relative">Privacy Policy</div>
            <div className="relative">Terms of Service</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;