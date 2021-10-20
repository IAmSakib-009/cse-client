import React from 'react';
import { Link } from 'react-router-dom';
import catB from '../../assets/images/Cat_Breeds.jpg'

const AboutIntro = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row">

                    <div className="aboutIntro-left col-md-6 d-flex align-items-center">
                        <div>
                        <h2>Cat Breeds</h2>
                        <p>The cat (Felis catus) is a domestic species of small carnivorous mammal.
                            It is the only domesticated species in the family Felidae and is often referred to as the domestic cat
                            to distinguish it from the wild members of the family.
                            A cat can either be a house cat, a farm cat or a feral cat;
                            the latter ranges freely and avoids human contact.</p>
                        <Link className="btn btn-success btn-lg" to="/DogBreeds">Read more</Link>
                        </div>
                    </div>
                    <div className="aboutIntro-right col-md-6">
                        <img src={catB} alt="catB" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutIntro;