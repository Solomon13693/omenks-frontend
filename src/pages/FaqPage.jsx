import React from 'react'
import BreadCrumb from '../components/BreadCrumb'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Header from '../components/Header'

const FaqPage = () => {
    return (
        <>

            <Header />

            <BreadCrumb page='FAQs' title="Company FAQs" />


            <main class="faq-page style-5 section-padding">


                <div class="faq-body">
                    <div class="container">

                        <div class="row gx-5">

                            <div class="col-lg-4">
                                <div class="faq-category">
                                    <h5> Question Category: </h5>
                                    <ul>

                                        <li>
                                            <a href="#accordion1" class="active"> Installation </a>
                                            <span> 0 </span>
                                        </li>

                                        <li>
                                            <a href="#accordion2"> Getting Started </a>
                                            <span> 02 </span>
                                        </li>

                                        <li>
                                            <a href="#accordion3"> Page Builder </a>
                                            <span> 03 </span>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div class="col-lg-8">

                                <div class="faq-questions">

                                    <div class="accordion pt-lg-0" id="accordion1">

                                        <h5 class="sec-title mt-0"> <span> 01. </span> Installation </h5>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd1">
                                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#bd1" aria-expanded="true" aria-controls="collapseOne">
                                                    Global search engine optimization
                                                </button>
                                            </h2>
                                            <div id="bd1" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion1">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd2">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd2" aria-expanded="false" aria-controls="collapseTwo">
                                                    Complete Social Media Integration
                                                </button>
                                            </h2>
                                            <div id="bd2" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion1">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd3">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd3" aria-expanded="false" aria-controls="collapseThree">
                                                    End-to-end encryption for messages
                                                </button>
                                            </h2>
                                            <div id="bd3" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion1">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion" id="accordion2">
                                        <h5 class="sec-title"> <span> 02. </span> Getting Started </h5>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd4">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd4" aria-expanded="true" aria-controls="collapseOne">
                                                    What could kill the company?
                                                </button>
                                            </h2>
                                            <div id="bd4" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion2">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd5">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd5" aria-expanded="false" aria-controls="collapseTwo">
                                                    Are there any worth being a little proactive about?
                                                </button>
                                            </h2>
                                            <div id="bd5" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion2">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd6">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd6" aria-expanded="false" aria-controls="collapseThree">
                                                    What qualities, feelings, attributes do we want?
                                                </button>
                                            </h2>
                                            <div id="bd6" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion2">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="accordion" id="accordion3">
                                        <h5 class="sec-title"> <span> 03. </span> Page Builder </h5>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd7">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd7" aria-expanded="true" aria-controls="collapseOne">
                                                    Materially help someone else with their priorities?
                                                </button>
                                            </h2>
                                            <div id="bd7" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordion3">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd8">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd8" aria-expanded="false" aria-controls="collapseTwo">
                                                    To poor or missing internal communication?
                                                </button>
                                            </h2>
                                            <div id="bd8" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion3">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accordion-item">
                                            <h2 class="accordion-header" id="hd9">
                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bd9" aria-expanded="false" aria-controls="collapseThree">
                                                    We address those with features or marketing?
                                                </button>
                                            </h2>
                                            <div id="bd9" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion3">
                                                <div class="accordion-body">
                                                    <div class="text">
                                                        Sass (short for syntactically awesome style sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets. The Sass Script is the scripting language itself. Sass consists of two syntaxes.
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

            </main>

            <CTA />

            <Footer />

        </>
    )
}

export default FaqPage