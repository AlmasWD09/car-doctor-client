import FeaturesCrud from "./FeaturesCrud";


const Features = () => {
    return (
        <div className="mt-10">
              <div className="text-center space-y-2">
                <h4 className="text-primary font-semibold">Core Features</h4>
                <h2 className="text-2xl font-bold">Why Choose Us</h2>
                <p className="max-w-xl mx-auto">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <FeaturesCrud />
        </div>
    );
};

export default Features;