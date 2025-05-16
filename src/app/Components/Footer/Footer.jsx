import React from 'react';
import { nanoid } from 'nanoid';
// import useBrand from 'store/footer/brand/useBrand';
// import useProducts from 'store/footer/products/useProducts';
// import useSolutions from 'store/footer/solutions/useSolutions';
// import useCustomSolutions from 'store/footer/customSolutions/useCustomSolutions';
// import useDevelopers from 'store/footer/developers/useDevelopers';
// import useResources from 'store/footer/resources/useResources';
// import useCompany from 'store/footer/company/useCompany';

import './Footer.css';
// import './Footer-media.scss';

function Footer() {
    // const brand = useBrand((state) => state.brand);
    // const products = useProducts((state) => state.products);
    // const solutions = useSolutions((state) => state.solutions);
    // const customSolutions = useCustomSolutions(
    //     (state) => state.customSolutions
    // );
    // const developers = useDevelopers((state) => state.developers);
    // const resources = useResources((state) => state.resources);
    // const company = useCompany((state) => state.company);

    return (
        <footer className="footer">
            <div className="tall-left">
                <div className="short-left"></div>
            </div>
            <div className="tall-right">
                <div className="short-right"></div>
            </div>

            <div className="footer-content">
          
              <ul><li><a href="">products </a></li></ul>
            </div>
        </footer>
    );
}

export default Footer;
