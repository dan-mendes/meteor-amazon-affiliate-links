Affiliates = {
	run: function(instance, affiliatePrograms) {
		// replace or insert Amazon Affiliate ID on amazon links
	  // grab links in post with href pointing to amazon
	  let links = instance.$("[href*='amazon.']");

	  links.each(function() {
	  	// grab locale of original href form: ["amazon.xyz", "xyz"]
	    const locale = this.href.match(/amazon\.([a-z.]{2,9})(?=\/)/i);

	    // set new affiliateId from settings or from backup
	    let affiliate;
	    if(affiliatePrograms[locale[0]]) {
	    	affiliate = affiliatePrograms[locale[0]];
	    } else {
	    	affiliate = affiliateBackups[locale[0]];
	    }

	    // remove tag
	    this.href = this.href.replace(/&tag=(.*?)&/i, '');
	    // add own tag
	    this.href = this.href.concat('&tag=' + affiliate.affiliateId);
	  });
	},
}

// BACKUP affIds
affiliateBackups = {
	'amazon.com': {
		identifier: "tag",
		affiliateId: "atmosphere00-20",
	},
	"amazon.co.uk": {
		identifier: "tag",
		affiliateId: "atmosphere06-21",
	},
	"amazon.ca": {
		identifier: "tag",
		affiliateId: "atmosphere025-20",
	},
	"amazon.fr": {
		identifier: "tag",
		affiliateId: "atmosphere03-21",
	},
	"amazon.de": {
		identifier: "tag",
		affiliateId: "atmosphere0a-21",
	},
	"amazon.it": {
		identifier: "tag",
		affiliateId: "atmosphere053-21",
	},
	"amazon.es": {
		identifier: "tag",
		affiliateId: "atmosphere0b-21",
	}
}