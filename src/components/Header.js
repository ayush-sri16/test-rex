import React from 'react'

const Header = () => {
    return (

        <section className='header'>
            <div>
                <div>
                    <h1>Free Test Automation for All.
                        <br />
                        <span>Community Powered.</span>
                    </h1>
                    <p>
                        TestRex is a free end-to-end test automation
                        platform for web, mobile, and API testing that's supported by
                        the #1 test automation community.
                    </p>
                    <div className='get-started'>
                        <button>learn more</button>
                    </div>
                </div>
                {/* <img src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/037ee37ac79475692be3cc826e73cdcc.jpg" alt="" /> */}

            </div>
        </section>

    )
}

export default Header