import React from "react";

class Navbar extends React.Component {
  constructor (props) {
      super (props);
      this.state = {
        dropdownClicked: false,
        windowSize: 0
      }
      this.dropdownToggle = this.dropdownToggle.bind(this);
      this.resizeWindow = this.resizeWindow.bind(this);
  }
  dropdownToggle() {
    this.setState((state) => ({
      dropdownClicked: !state.dropdownClicked
    }))
  }
  resizeWindow() {
    this.setState({
      windowSize: window.innerWidth
    })
  }
  componentDidMount() {
    this.resizeWindow();
    window.addEventListener("resize", this.resizeWindow)
  }
  render () {
    let dropdownActive = this.state.dropdownClicked ? "tham-active" : "";
    let hideNav = () => {
      if (this.state.windowSize >= 768) {
        return "visible"
      } else {
        return this.state.dropdownClicked ? "visible" : "hidden";
      }
    }
    let hiddenNav = hideNav()
    return (
      <header className="bg-deep-blue sticky top-0 z-20">
        <div className="container mx-auto flex flex-col p-5 items-center md:flex-row">
          <div className="container max-auto flex flex-row justify-between md:w-auto">
            <a href="#about" className="ml-3 text-xl hover:text-primary-green font-medium">
              John Berry
            </a>
            <div className={ `tham tham-e-spin tham-w-8 mr-3 md:hidden ${dropdownActive}` } onClick={this.dropdownToggle}>
              <div className="tham-box">
                <div className="tham-inner bg-white" />
              </div>
            </div>
          </div>
          <nav className="container mx-auto flex flex-col items-start md:w-auto md:flex-row md:mr-auto md:ml-4 md:pl-4 md:border-l md:border-primary-green">
            <a href="#projects" className={ `ml-6 mt-2 hover:text-primary-green ${hiddenNav} md:mr-5 md:ml-2 md:mt-0`}>
              My Projects
            </a>
            <a href="#skills" className={ `ml-6 mt-2 hover:text-primary-green ${hiddenNav} md:mr-5 md:ml-2 md:mt-0`}>
              Skills
            </a>
          </nav>
          <a
            href="#contact"
            className={ `ml-6 mt-2 mr-auto hover:text-primary-green ${hiddenNav} md:mr-3 md:mt-0`}>
            Contact Me
          </a>
        </div>
      </header>
     )
  }
}

export default Navbar;