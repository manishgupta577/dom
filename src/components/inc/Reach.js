import React from 'react';
function Reach(){
    return(
      <div>
          <section className="section">

          
          <section class="contact" id="contact">
        <div class="container">
            
            <div class="contact-content">
            <h2 class="title">Stay Connected</h2>
                <div class="column center">
                    
                    <form action="#">
                        <div class="fields">
                            <div class="field name">
                                <input type="text" placeholder="Name" required/>
                            </div>
                            <div class="field email">
                                <input type="email" placeholder="Email" required/>
                            </div>
                        </div>
                        <div class="field">
                            <input type="text" placeholder="Subject" required/>
                        </div>
                        <div class="field textarea">
                            <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                        </div>
                        <div class="button">
                            <button type="submit">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </section>
      </div>
    );
}
export default Reach;