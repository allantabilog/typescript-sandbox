const AWS = require("aws-sdk");
import { AWSError } from "aws-sdk";
import { SendEmailResponse } from "aws-sdk/clients/ses";

interface SendEmailParams {
  Destination: {
    ToAddresses: string[];
  };
  Message: {
    Body: {
      Html: {
        Charset: string;
        Data: string;
      };
    };
    Subject: {
      Charset: string;
      Data: string;
    };
  };
  Source: string;
}

const ses = new AWS.SES({ region: "us-east-1" });

function sendEmail(params: SendEmailParams): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    ses.sendEmail(params, (err: AWSError, data: SendEmailResponse) => {
      if (err) {
        console.log(err, err.stack);
        reject(err);
      } else {
        console.log(data);
        resolve();
      }
    });
  });
}

const params: SendEmailParams = {
  Destination: {
    ToAddresses: ["amtabilog@yahoo.com"],
  },
  Message: {
    Body: {
      Html: {
        Charset: "UTF-8",
        Data: "This is the HTML body of the email",
      },
    },
    Subject: {
      Charset: "UTF-8",
      Data: "Test email",
    },
  },
  Source: "hello@example.com",
};

sendEmail(params);
