'use strict';


const	render = (data) => {
		console.log(data);
return `<?xml version="1.0" encoding="utf-8"?>
<LeadData Target="Lead.Insert" Partner="${process.env.PARTNER}" Password="${process.env.PASSWORD}" RequestTime="">
<AffiliateData Id="1" OfferId="686" SubId="1234151234" Sub2Id="1" Source="All" VerifyAddress="false" RespondOnNoSale="true" SellResponseURL="" LeadId="" />
<ContactData>
<FirstName>${data.first_name}</FirstName>
<LastName>${data.last_name}</LastName>
<Address>${data.address}</Address>
<City>${data.city}</City>
<State>${data.state}</State>
<ZIPCode>${data.zip_code}</ZIPCode>
<EmailAddress>ckmtest@gmail.com</EmailAddress>
<PhoneNumber>${data.phone_number}</PhoneNumber>
<IPAddress>${data.ip_address}</IPAddress>
</ContactData>
<QuoteRequest QuoteType="Solar">
<Person>
<BirthDate>1980-07-14</BirthDate>
<Gender>Male</Gender>
</Person>
<Homes>
<Home>
<PropertyUsage>Residential</PropertyUsage>
<OwnRented>${data.home_owner}</OwnRented>
<AuthorizedForPropertyChanges>Yes</AuthorizedForPropertyChanges>
<ProjectStatus>Existing Home</ProjectStatus>
<RoofShade>Full Sun</RoofShade>
<RoofType>Not Sure</RoofType>
<ElectricityBill>$126-150</ElectricityBill>
<SolarSystem>
<SolarSystemType>Solar electricity</SolarSystemType>
<SolarInstallationLocation>Roof</SolarInstallationLocation>
<CurrentUtilityProvider>${data.elec_provider}</CurrentUtilityProvider>
</SolarSystem>
</Home>
</Homes>
</QuoteRequest>
</LeadData>`;
};

export default { render };
