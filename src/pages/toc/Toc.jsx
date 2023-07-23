import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/Landing/MainLayout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';

const Toc = () => {
  return (
    <>
      <Desktop>
        <MainLayout>
          <p className="text-center font-bold text-xl">
            Terms &amp; Conditions
          </p>
          <div className="my-8 mx-40">
            <div className="my-4">
              <p className="font-bold my-2">1. Our contract</p>
              <p className="my-2">
                By using or subscribing to Eko Hub you enter into a binding
                contract with us on the following terms and conditions.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">2. Reach</p>
              <p className="my-2">
                2.1 Eko Hub is directed at commercial enterprises in Nigeria and
                Africa.
              </p>
              <p className="my-2">
                2.2 You represent to us and to all suppliers and buyers of goods
                and other products through Eko Hub that you have the capacity
                under applicable law to enter into contract and that it is
                within the scope of your authority to conclude contracts on
                behalf of your business.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">3. User Account</p>
              <p className="my-2">
                3.1 You must register with us to have access to Eko Hub.
              </p>
              <p className="my-2">
                3.2 You will be required to provide certain personal information
                which includes but not limited to your name, user name, email
                address and password. The information provided must be correct
                and accurate.
              </p>
              <p className="my-2">
                3.3 You must not disseminate this personal information to
                anyone. You acknowledge that you are responsible for the
                security of your personal information and we do not accept
                liability for the security of your account as you agree to be
                responsible for maintaining the confidentiality of your
                passwords or other accounts identifiers and all activities under
                your account.
              </p>
              <p className="my-2">
                3.4 We reserve the right to terminate your account where you
                have provided false, inaccurate or incorrect information.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">4. Our Promises</p>
              <p className="my-2">
                4.1 We will permit you access, use and interact with Eko Hub
                subject to these terms and conditions.
              </p>
              <p className="my-2">4.2 We will:</p>
              <p className="my-2">
                4.2.1 exercise reasonable care in compiling Eko Hub
              </p>
              <p className="my-2">
                4.2.2 use reasonable efforts to make Eko Hub available to you at
                all times; and
              </p>
              <p className="my-2">
                4.2.3 take the steps set out in our privacy policy to endeavour
                to secure any personal data and payment card information you may
                give us.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">5. Exclusions and Limitations</p>
              <p className="my-2">
                5.1 We do not represent or warrant that access to Eko Hub or any
                part of it will be uninterrupted, reliable or fault free.
              </p>
              <p className="my-2">
                5.2 We do not represent or warrant to you that Eko Hub or any of
                its contents will be accurate, complete or reliable.
              </p>
              <p className="my-2">5.3 We do not represent or warrant that:</p>
              <p className="my-2">
                5.3.1 any services (whether or not provided by us) will be
                provided with due care and skill; or
              </p>
              <p className="my-2">
                5.3.2 any goods (whether or not provided by us) will be of
                merchantable quality or will be fit for any purpose (even if
                that purpose has been previously notified to us)
              </p>
              <p className="my-2">
                5.4 To the extent permitted by law, we exclude all liability
                (whether arising in contract, tort or otherwise and whether or
                not due to our negligence) which we may otherwise have to you as
                a result of:
              </p>
              <p className="my-2">
                5.4.1 any technical, factual, textual or typographical
                inaccuracies, errors or omissions on or relating to Eko Hub or
                any information thereon.
              </p>
              <p className="my-2">
                5.4.2 The unavailability of Eko Hub (or any part of it), goods
                or services.
              </p>
              <p className="my-2">
                5.4.3 The delay in providing or failure to provide or make
                available, goods or services or any negligent provision of goods
                and other products
              </p>
              <p className="my-2">
                5.4.4 Any goods not being of merchantable quality or fit for
                their intended purpose; or
              </p>
              <p className="my-2">
                5.4.5 Any misrepresentation on or relating to Eko Hub, the goods
                or the services (other than a fraudulent misrepresentation made
                by us or on our behalf)
              </p>
              <p className="my-2">
                5.5 Our maximum liability to you or your business in respect of
                your use of Eko Hub or any services we provide or make available
                to you through or in relation to Eko Hub will be the amount of
                any subscription fees paid on behalf of your business during the
                year in which the liability arose. You agree that we shall have
                no liability for indirect or consequential losses, loss of data,
                income or profits or damages for loss of or damage to property.
              </p>
              <p className="my-2">
                5.6 You agree that each of these limitations is reasonable
                having regard to the nature of Eko Hub and in particular given
                that when you purchase information, goods or services through
                Eko Hub you will enter into a separate contract with the
                supplier in each case.
              </p>
              <p className="my-2">
                5.7 None of the exclusions or limitations in this Clause 4 shall
                exclude or restrict our liability for death or personal injury
                caused by our negligence.
              </p>
              <p className="my-2">
                5.8 None of the above exclusions shall affect any statutory
                rights which are not capable of being excluded. However, in such
                case our obligation, where permitted by law, will be limited to
                the re-supply of Eko Hub, good or service to you.
              </p>
              <p className="my-2">
                5.9 Each of the above exclusions or limitations shall be
                construed as separate, and severable, provision of these terms
                and conditions.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">6. Subscription and Charges</p>
              <p className="my-2">
                6.1 The Eko Hub platform is free for you if you are an
                individual customer but subject to subscription fees where you
                are a business.
              </p>
              <p className="my-2">
                6.2 By subscribing to Eko Hub, you agree to pay our charges at
                the rate applicable from time to time and stipulated on Eko Hub.
              </p>
              <p className="my-2">
                6.3 In addition to paying subscription charges, you agree that
                you shall be liable to pay to us commission on all successful
                orders of goods and other products on Eko Hub.
              </p>
              <p className="my-2">
                6.4 If you fail at any time to pay any subscription charges or
                commission due in accordance with these terms and conditions, we
                may, in our discretion and without prejudice to our other
                rights, deny you access to those areas of Eko Hub which are
                exclusively available to subscribers. We need not provide you
                with advance notice in such circumstances.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">7. Payment and Billing</p>
              <p className="my-2">7.1 Payments on Eko Hub</p>
              <p className="my-2">
                7.2 If you purchase any product on Eko Hub, you agree to pay in
                full price for the products when the purchase is made.
              </p>
              <p className="my-2">
                7.3 The total price will also include the taxes applicable on
                the date of purchase
              </p>
              <p className="my-2">
                7.4 The total price of the product including all applicable
                taxes is included upon the confirmation of your order.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">8. Links to other Sites</p>
              <p className="my-2">
                Certain links, including hypertext links, in Eko Hub will take
                you outside Eko Hub. Links are provided for your convenience and
                inclusion of any link does not imply endorsement or approval by
                us of the linked site, its operator or its content. We are not
                responsible for the content of any website outside of Eko Hub.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">9. Termination of Subscription</p>
              <p className="my-2">
                9.1 We may terminate your subscription immediately if you are in
                material breach of any of these terms and conditions and in
                particular upon any failure by you to pay your subscription
                charge or commission due to us in accordance with these terms
                and conditions. You may terminate your subscription at any time
                on 30 days’ notice to us.
              </p>
              <p className="my-2">
                9.2 Any rights that have accrued to either party at the date of
                termination will remain enforceable after termination.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">10. Prohibited Use</p>
              <p className="my-2">
                10.1 You agree not to use Eko Hub in the following Manner:
              </p>
              <p className="my-2">
                10.1.1 To harass, abuse or threaten others or otherwise violate
                any person’s rights.
              </p>
              <p className="my-2">10.1.2 To perpetrate fraud.</p>
              <p className="my-2">
                10.1.3 Using Eko Hub in a way that impacts user access to Eko
                Hub.
              </p>
              <p className="my-2">
                10.1.4 Violating any intellectual property rights belonging to
                us or any third party
              </p>

              <p className="my-2">10.1.5 To sell illegal products</p>

              <p className="my-2">
                10.2 Additionally, you agree that you will not do as follows: i.
                Interfere or attempt to interfere with the proper working of Eko
                Hub ii. Bypass any measures we may have used to prevent or
                restrict access to Eko Hub. iii. To interfere with or circumvent
                the security features of Eko Hub. iv. To damage, disable,
                overburden or impair Eko Hub or any other person’s use of Eko
                Hub. v. To use Eko Hub contrary to the applicable laws and
                regulations or in a way that causes, or may cause harm to Eko
                Hub, any person or business entity.
              </p>

              <p className="my-2">
                10.3 We retain the authority to review all content posted by you
                on Eko Hub and we reserve the right to terminate your use of Eko
                Hub for violating any of the prohibited uses.
              </p>
              <p className="my-2">
                10.4 You acknowledge that we do not control the content or any
                information that may be posted by other users. Consequently, we
                are not responsible or liable for those contents or information.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">11. General</p>
              <p className="my-2">
                11.1 Third Party Rights Where in these terms representations and
                warranties are made to us and to suppliers of goods and other
                products through Eko Hub, you acknowledge and agree that such
                representations and warranties are intended to grant rights to,
                and operate for the benefit of, all such suppliers and that such
                supplier may rely upon and enforce such representations and
                warranties against you.
              </p>
              <p className="my-2">
                11.2 Variations We reserve the right at any time without notice
                to revise the content of Eko Hub (including services offered to
                us) and these terms and conditions. Any changes to these terms
                and conditions will be displayed on Eko Hub and by continuing to
                use Eko Hub following any such change you will signify that you
                agree to be bound by the revised terms and conditions of use.
              </p>
              <p className="my-2">
                11.3 Taxes We have made every effort to make clear whether the
                quoted prices for goods and other products available through Eko
                Hub include any relevant tax or duty or do not. Where in any
                case it is not clear please note before you make an order that
                you might be required to bear a liability to tax or duty (for
                example value added tax) imposed by the supplier or by operation
                of law that is in addition to the price.
              </p>
              <p className="my-2">
                11.4 The Use of your Information You agree that we may collect,
                store and use information about you in accordance with our
                privacy policy. You acknowledge and agree to be bound by the
                terms of our privacy policy.
              </p>
              <p className="my-2">
                11.5 Copyright All rights in the design, text, graphics and
                other material on Eko Hub and the selection or arrangement
                thereof are the copyright of us or other third parties.
                Permission is granted to electronically copy and print in hard
                copy portions of Eko Hub solely in connection with the
                acquisition of goods or services through Eko Hub. Any other use
                of materials on Eko Hub (including reproduction for purposes
                other than those noted above and alteration, modification,
                distribution, or republication) without our prior written
                permission is strictly prohibited You hereby grant to us a
                perpetual royalty-free, irrevocable licence to copy, issue
                copies, communicate to the public, make publicly available and
                include in a cable programme service (either in whole or in part
                or in modified or edited form) any material you upload or post
                to Eko Hub (whether to a chat room, bulletin board or
                otherwise). You acknowledge and agree that such material is not
                uploaded or posted subject to any obligation of confidence.
              </p>
              <p className="my-2">
                11.6 Trademarks We are the proprietor of the Eko Hub trademark
                in Nigeria and other countries. All other trademarks, product
                names and company names or logos used on Eko Hub are our
                property or that of their respective owners. No permission is
                given by us in respect of the use of any such trademarks,
                get-up, product names, company names, logos or titles and such
                use may constitute an infringement of the holder’s rights.
              </p>
              <p className="my-2">
                11.7 Access We reserve the right in our sole discretion to deny
                any user or account holder access to Eko Hub or any part of Eko
                Hub without notice and to decline to provide the service to any
                user or account holder that is in breach of these terms and
                conditions of use.
              </p>
              <p className="my-2">
                11.8 Indemnification You hereby agree to indemnify us, our
                employees, agents and third parties from and against all
                liabilities, cost, demand, cause of action, damages and expenses
                arising out of your use and inability to use the application and
                your violation of applicable laws, rules and regulation.
              </p>
              <p className="my-2">
                11.9 Events Beyond Our Control We shall not be liable to you for
                nay breach of these terms and conditions of use or any failure
                to provide or delay in providing our services through Eko Hub
                resulting from any event or circumstance beyond our reasonable
                control including, without limitation, strikes, lock-outs and
                other industrial disputes, breakdown of systems or network
                access, fire, explosion or accident.
              </p>
              <p className="my-2">
                11.10 Applicable Law and Jurisdiction These terms and conditions
                (and any dispute, controversy, proceedings or claim of whatever
                nature arising out of or in any way relating to them or their
                formation) shall be governed by and interpreted in accordance
                with laws of the Federal Republic of Nigeria and, for these
                purposes the parties irrevocably submit to the exclusive
                jurisdiction of Nigerian courts.
              </p>
              <p className="my-2">
                11.11 Unenforceability. The enforceability or otherwise of any
                provisions of these terms and conditions shall not affect t the
                enforceability of the rest of these terms and conditions.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">12. Electronic</p>
              <p className="my-2">
                Communication You consent to receive electronic communications
                and you agree that all agreement, notices, disclosures and other
                communications we provide to you electronically, via E-mail and
                on Eko Hub satisfy any requirement that communication must be in
                writing.
              </p>
            </div>
            <div className="my-4">
              <p className="font-bold my-2">
                13. Definitions In these terms and conditions
              </p>
              <p className="my-2">
                13.1 ‘Eko Hub” means our presence on the internet including the
                application software that enables your access to our services.
              </p>
              <p className="my-2">
                13.2 ‘our’ ‘we’ and ‘us’ means Eko Hub Limited and, where
                applicable, its officers, employees and authorized agents; and
              </p>
              <p className="my-2">
                13.3 ‘you’ and ‘your’ include any business with which you are
                associated and on behalf of which you use Eko Hub (‘your
                business’)
              </p>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout tab={false}>
          <div className="py-8">
            {/* <Link
              to={paths.HOME}
              className="cursor-pointer m-4 px-4 py-2 bg-white rounded-full drop-shadow-lg text-xl"
            >
              {'<'}
            </Link> */}
            <p className="text-center font-bold text-xl">
              Terms &amp; Conditions
            </p>
            <div className="my-8 mx-4">
              <div className="my-4">
                <p className="font-bold my-2">1. Our contract</p>
                <p className="my-2">
                  By using or subscribing to Eko Hub you enter into a binding
                  contract with us on the following terms and conditions.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">2. Reach</p>
                <p className="my-2">
                  2.1 Eko Hub is directed at commercial enterprises in Nigeria
                  and Africa.
                </p>
                <p className="my-2">
                  2.2 You represent to us and to all suppliers and buyers of
                  goods and other products through Eko Hub that you have the
                  capacity under applicable law to enter into contract and that
                  it is within the scope of your authority to conclude contracts
                  on behalf of your business.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">3. User Account</p>
                <p className="my-2">
                  3.1 You must register with us to have access to Eko Hub.
                </p>
                <p className="my-2">
                  3.2 You will be required to provide certain personal
                  information which includes but not limited to your name, user
                  name, email address and password. The information provided
                  must be correct and accurate.
                </p>
                <p className="my-2">
                  3.3 You must not disseminate this personal information to
                  anyone. You acknowledge that you are responsible for the
                  security of your personal information and we do not accept
                  liability for the security of your account as you agree to be
                  responsible for maintaining the confidentiality of your
                  passwords or other accounts identifiers and all activities
                  under your account.
                </p>
                <p className="my-2">
                  3.4 We reserve the right to terminate your account where you
                  have provided false, inaccurate or incorrect information.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">4. Our Promises</p>
                <p className="my-2">
                  4.1 We will permit you access, use and interact with Eko Hub
                  subject to these terms and conditions.
                </p>
                <p className="my-2">4.2 We will:</p>
                <p className="my-2">
                  4.2.1 exercise reasonable care in compiling Eko Hub
                </p>
                <p className="my-2">
                  4.2.2 use reasonable efforts to make Eko Hub available to you
                  at all times; and
                </p>
                <p className="my-2">
                  4.2.3 take the steps set out in our privacy policy to
                  endeavour to secure any personal data and payment card
                  information you may give us.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">5. Exclusions and Limitations</p>
                <p className="my-2">
                  5.1 We do not represent or warrant that access to Eko Hub or
                  any part of it will be uninterrupted, reliable or fault free.
                </p>
                <p className="my-2">
                  5.2 We do not represent or warrant to you that Eko Hub or any
                  of its contents will be accurate, complete or reliable.
                </p>
                <p className="my-2">5.3 We do not represent or warrant that:</p>
                <p className="my-2">
                  5.3.1 any services (whether or not provided by us) will be
                  provided with due care and skill; or
                </p>
                <p className="my-2">
                  5.3.2 any goods (whether or not provided by us) will be of
                  merchantable quality or will be fit for any purpose (even if
                  that purpose has been previously notified to us)
                </p>
                <p className="my-2">
                  5.4 To the extent permitted by law, we exclude all liability
                  (whether arising in contract, tort or otherwise and whether or
                  not due to our negligence) which we may otherwise have to you
                  as a result of:
                </p>
                <p className="my-2">
                  5.4.1 any technical, factual, textual or typographical
                  inaccuracies, errors or omissions on or relating to Eko Hub or
                  any information thereon.
                </p>
                <p className="my-2">
                  5.4.2 The unavailability of Eko Hub (or any part of it), goods
                  or services.
                </p>
                <p className="my-2">
                  5.4.3 The delay in providing or failure to provide or make
                  available, goods or services or any negligent provision of
                  goods and other products
                </p>
                <p className="my-2">
                  5.4.4 Any goods not being of merchantable quality or fit for
                  their intended purpose; or
                </p>
                <p className="my-2">
                  5.4.5 Any misrepresentation on or relating to Eko Hub, the
                  goods or the services (other than a fraudulent
                  misrepresentation made by us or on our behalf)
                </p>
                <p className="my-2">
                  5.5 Our maximum liability to you or your business in respect
                  of your use of Eko Hub or any services we provide or make
                  available to you through or in relation to Eko Hub will be the
                  amount of any subscription fees paid on behalf of your
                  business during the year in which the liability arose. You
                  agree that we shall have no liability for indirect or
                  consequential losses, loss of data, income or profits or
                  damages for loss of or damage to property.
                </p>
                <p className="my-2">
                  5.6 You agree that each of these limitations is reasonable
                  having regard to the nature of Eko Hub and in particular given
                  that when you purchase information, goods or services through
                  Eko Hub you will enter into a separate contract with the
                  supplier in each case.
                </p>
                <p className="my-2">
                  5.7 None of the exclusions or limitations in this Clause 4
                  shall exclude or restrict our liability for death or personal
                  injury caused by our negligence.
                </p>
                <p className="my-2">
                  5.8 None of the above exclusions shall affect any statutory
                  rights which are not capable of being excluded. However, in
                  such case our obligation, where permitted by law, will be
                  limited to the re-supply of Eko Hub, good or service to you.
                </p>
                <p className="my-2">
                  5.9 Each of the above exclusions or limitations shall be
                  construed as separate, and severable, provision of these terms
                  and conditions.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">6. Subscription and Charges</p>
                <p className="my-2">
                  6.1 The Eko Hub platform is free for you if you are an
                  individual customer but subject to subscription fees where you
                  are a business.
                </p>
                <p className="my-2">
                  6.2 By subscribing to Eko Hub, you agree to pay our charges at
                  the rate applicable from time to time and stipulated on Eko
                  Hub.
                </p>
                <p className="my-2">
                  6.3 In addition to paying subscription charges, you agree that
                  you shall be liable to pay to us commission on all successful
                  orders of goods and other products on Eko Hub.
                </p>
                <p className="my-2">
                  6.4 If you fail at any time to pay any subscription charges or
                  commission due in accordance with these terms and conditions,
                  we may, in our discretion and without prejudice to our other
                  rights, deny you access to those areas of Eko Hub which are
                  exclusively available to subscribers. We need not provide you
                  with advance notice in such circumstances.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">7. Payment and Billing</p>
                <p className="my-2">7.1 Payments on Eko Hub</p>
                <p className="my-2">
                  7.2 If you purchase any product on Eko Hub, you agree to pay
                  in full price for the products when the purchase is made.
                </p>
                <p className="my-2">
                  7.3 The total price will also include the taxes applicable on
                  the date of purchase
                </p>
                <p className="my-2">
                  7.4 The total price of the product including all applicable
                  taxes is included upon the confirmation of your order.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">8. Links to other Sites</p>
                <p className="my-2">
                  Certain links, including hypertext links, in Eko Hub will take
                  you outside Eko Hub. Links are provided for your convenience
                  and inclusion of any link does not imply endorsement or
                  approval by us of the linked site, its operator or its
                  content. We are not responsible for the content of any website
                  outside of Eko Hub.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">9. Termination of Subscription</p>
                <p className="my-2">
                  9.1 We may terminate your subscription immediately if you are
                  in material breach of any of these terms and conditions and in
                  particular upon any failure by you to pay your subscription
                  charge or commission due to us in accordance with these terms
                  and conditions. You may terminate your subscription at any
                  time on 30 days’ notice to us.
                </p>
                <p className="my-2">
                  9.2 Any rights that have accrued to either party at the date
                  of termination will remain enforceable after termination.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">10. Prohibited Use</p>
                <p className="my-2">
                  10.1 You agree not to use Eko Hub in the following Manner:
                </p>
                <p className="my-2">
                  10.1.1 To harass, abuse or threaten others or otherwise
                  violate any person’s rights.
                </p>
                <p className="my-2">10.1.2 To perpetrate fraud.</p>
                <p className="my-2">
                  10.1.3 Using Eko Hub in a way that impacts user access to Eko
                  Hub.
                </p>
                <p className="my-2">
                  10.1.4 Violating any intellectual property rights belonging to
                  us or any third party
                </p>

                <p className="my-2">10.1.5 To sell illegal products</p>

                <p className="my-2">
                  10.2 Additionally, you agree that you will not do as follows:
                  i. Interfere or attempt to interfere with the proper working
                  of Eko Hub ii. Bypass any measures we may have used to prevent
                  or restrict access to Eko Hub. iii. To interfere with or
                  circumvent the security features of Eko Hub. iv. To damage,
                  disable, overburden or impair Eko Hub or any other person’s
                  use of Eko Hub. v. To use Eko Hub contrary to the applicable
                  laws and regulations or in a way that causes, or may cause
                  harm to Eko Hub, any person or business entity.
                </p>

                <p className="my-2">
                  10.3 We retain the authority to review all content posted by
                  you on Eko Hub and we reserve the right to terminate your use
                  of Eko Hub for violating any of the prohibited uses.
                </p>
                <p className="my-2">
                  10.4 You acknowledge that we do not control the content or any
                  information that may be posted by other users. Consequently,
                  we are not responsible or liable for those contents or
                  information.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">11. General</p>
                <p className="my-2">
                  11.1 Third Party Rights Where in these terms representations
                  and warranties are made to us and to suppliers of goods and
                  other products through Eko Hub, you acknowledge and agree that
                  such representations and warranties are intended to grant
                  rights to, and operate for the benefit of, all such suppliers
                  and that such supplier may rely upon and enforce such
                  representations and warranties against you.
                </p>
                <p className="my-2">
                  11.2 Variations We reserve the right at any time without
                  notice to revise the content of Eko Hub (including services
                  offered to us) and these terms and conditions. Any changes to
                  these terms and conditions will be displayed on Eko Hub and by
                  continuing to use Eko Hub following any such change you will
                  signify that you agree to be bound by the revised terms and
                  conditions of use.
                </p>
                <p className="my-2">
                  11.3 Taxes We have made every effort to make clear whether the
                  quoted prices for goods and other products available through
                  Eko Hub include any relevant tax or duty or do not. Where in
                  any case it is not clear please note before you make an order
                  that you might be required to bear a liability to tax or duty
                  (for example value added tax) imposed by the supplier or by
                  operation of law that is in addition to the price.
                </p>
                <p className="my-2">
                  11.4 The Use of your Information You agree that we may
                  collect, store and use information about you in accordance
                  with our privacy policy. You acknowledge and agree to be bound
                  by the terms of our privacy policy.
                </p>
                <p className="my-2">
                  11.5 Copyright All rights in the design, text, graphics and
                  other material on Eko Hub and the selection or arrangement
                  thereof are the copyright of us or other third parties.
                  Permission is granted to electronically copy and print in hard
                  copy portions of Eko Hub solely in connection with the
                  acquisition of goods or services through Eko Hub. Any other
                  use of materials on Eko Hub (including reproduction for
                  purposes other than those noted above and alteration,
                  modification, distribution, or republication) without our
                  prior written permission is strictly prohibited You hereby
                  grant to us a perpetual royalty-free, irrevocable licence to
                  copy, issue copies, communicate to the public, make publicly
                  available and include in a cable programme service (either in
                  whole or in part or in modified or edited form) any material
                  you upload or post to Eko Hub (whether to a chat room,
                  bulletin board or otherwise). You acknowledge and agree that
                  such material is not uploaded or posted subject to any
                  obligation of confidence.
                </p>
                <p className="my-2">
                  11.6 Trademarks We are the proprietor of the Eko Hub trademark
                  in Nigeria and other countries. All other trademarks, product
                  names and company names or logos used on Eko Hub are our
                  property or that of their respective owners. No permission is
                  given by us in respect of the use of any such trademarks,
                  get-up, product names, company names, logos or titles and such
                  use may constitute an infringement of the holder’s rights.
                </p>
                <p className="my-2">
                  11.7 Access We reserve the right in our sole discretion to
                  deny any user or account holder access to Eko Hub or any part
                  of Eko Hub without notice and to decline to provide the
                  service to any user or account holder that is in breach of
                  these terms and conditions of use.
                </p>
                <p className="my-2">
                  11.8 Indemnification You hereby agree to indemnify us, our
                  employees, agents and third parties from and against all
                  liabilities, cost, demand, cause of action, damages and
                  expenses arising out of your use and inability to use the
                  application and your violation of applicable laws, rules and
                  regulation.
                </p>
                <p className="my-2">
                  11.9 Events Beyond Our Control We shall not be liable to you
                  for nay breach of these terms and conditions of use or any
                  failure to provide or delay in providing our services through
                  Eko Hub resulting from any event or circumstance beyond our
                  reasonable control including, without limitation, strikes,
                  lock-outs and other industrial disputes, breakdown of systems
                  or network access, fire, explosion or accident.
                </p>
                <p className="my-2">
                  11.10 Applicable Law and Jurisdiction These terms and
                  conditions (and any dispute, controversy, proceedings or claim
                  of whatever nature arising out of or in any way relating to
                  them or their formation) shall be governed by and interpreted
                  in accordance with laws of the Federal Republic of Nigeria
                  and, for these purposes the parties irrevocably submit to the
                  exclusive jurisdiction of Nigerian courts.
                </p>
                <p className="my-2">
                  11.11 Unenforceability. The enforceability or otherwise of any
                  provisions of these terms and conditions shall not affect t
                  the enforceability of the rest of these terms and conditions.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">12. Electronic</p>
                <p className="my-2">
                  Communication You consent to receive electronic communications
                  and you agree that all agreement, notices, disclosures and
                  other communications we provide to you electronically, via
                  E-mail and on Eko Hub satisfy any requirement that
                  communication must be in writing.
                </p>
              </div>
              <div className="my-4">
                <p className="font-bold my-2">
                  13. Definitions In these terms and conditions
                </p>
                <p className="my-2">
                  13.1 ‘Eko Hub” means our presence on the internet including
                  the application software that enables your access to our
                  services.
                </p>
                <p className="my-2">
                  13.2 ‘our’ ‘we’ and ‘us’ means Eko Hub Limited and, where
                  applicable, its officers, employees and authorized agents; and
                </p>
                <p className="my-2">
                  13.3 ‘you’ and ‘your’ include any business with which you are
                  associated and on behalf of which you use Eko Hub (‘your
                  business’)
                </p>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Toc;
