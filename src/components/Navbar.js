import React, { Component } from 'react'
import Link from 'gatsby-link'
import Logo from '../images/squiblylight.png'
import Icon from '../images/squiblydark.png'

class Navbar extends Component {
    state = {
        menuOpen: false,
        isTop: true,
        navColor: 'navbar is-primary',
        logo: Logo,
        mobile: 'navbar-menu has-background-primary has-text-white',
        mobileToggle: 'navbar-burger has-text-white'
    };

    menuToggleClickHandler = () => {
        this.setState((prevState) => {
            return { menuOpen: !prevState.menuOpen };
        });
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = window.scrollY < 75;
          if (isTop !== this.state.isTop) {
            this.setState({
              navColor: 'navbar is-white shadowed is-fixed-top',
              logo: Icon,
              mobile: 'navbar-menu has-background-white has-text-primary',
              mobileToggle: 'navbar-burger has-text-primary'
            })
          } else {
            this.setState({
              navColor: 'navbar is-primary',
              logo: Logo,
              mobile: 'navbar-menu has-background-primary has-text-white',
              mobileToggle: 'navbar-burger has-text-white'
            })
          }
        });
      }
    render() {
        return (
            <div>
                <nav className={this.state.navColor}>
                    <div className="container">
                        <div className="navbar-brand">
                            <Link className="navbar-item" to="/">
                                <img src={this.state.logo} alt="Logo"/>
                            </Link>
                            <a
                                
                                role="button"
                                className = {
                                  this.state.menuOpen ? `${this.state.mobileToggle} is-active` : `${this.state.mobileToggle}`
                                }
                                data-target="navMenu"
                                aria-label="menu"
                                aria-expanded="false"
                                onClick={this.menuToggleClickHandler} >
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className = {
                          this.state.menuOpen ? `${this.state.mobile} is-active` : 'navbar-menu'
                        }
                        id="navMenu">
                            
                            <div className="navbar-end is-primary">
                                <Link to="/investors" className="navbar-item">
                                    Investors
                                </Link>

                                <div className="navbar-item">
                                    <Link to="/contact" className="button is-success is-fullwidth">
                                        Request Demo
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Navbar