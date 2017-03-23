# Meteor Amazon affiliate links

Insert your Amazon affiliate program referral id into Amazon product links on your Meteor app.'

    meteor add dmendes:amazon-affiliate-links

Adds `Affiliates` object to the global scope.

# How to use

Insert your Amazon Associate information into your app's settings.json file:

    {
        "public": {
            (...),
            "affiliatePrograms": {
                "amazon.es": { 
                    "identifier": "tag",
                    "affiliateId": "yourAmazonEsAffiliate-21"
                },
                "amazon.fr": {
                    "identifier": "tag",
                    "affiliateId": "yourAmazonFrAffiliate-21"
                }
            }
        }
    }

For a target template, you will be able to insert (and replace, in case another affiliate referal is already present) your Amazon associate referral to Amazon product links:

    Template.exampleTemplate.onRendered(function() {
        Affiliates.run(this, Meteor.settings.public.affiliatePrograms);
    });  

This will not change Amazon product links in other templates.