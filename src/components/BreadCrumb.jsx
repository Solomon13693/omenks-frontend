import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({ title, page }) => {
    return (
        <>

            <section class="inner-header style-5">
                <div class="container">
                    <div class="content">
                        <div class="links">
                            <Link to='/'> Home </Link>
                            <a href="#">  { page } </a>
                        </div>
                        <h4 className='pt-3'> { title } </h4>
                    </div>
                </div>
            </section>

        </>
    )
}

export default BreadCrumb