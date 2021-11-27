class Address 
{

    street1;
    street2;
    city;
    zipCode;
    country;
    

    constructor(s1,s2,c,zip,country)
    {
        this.street1 =s1;
        this.street2=s2;
        this.city = c;
        this.zipCode=zip;
        this.country = country
    }
}

module.exports=Address;