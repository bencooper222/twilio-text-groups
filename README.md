# twilio-text-groups
Define groups of people and send what you want to them

## Start up
First, create a `config.js` file, copy the contents of `sample-config.js` into it and then populate it with your Twilio credentials. Then, add a JSON with details (probably start with your own phone number), set the function at the end appropriately and install/run the code: 

```
yarn install # don't use npm, npm sucks and you're wrong for using it
yarn start
```

## Demo
Check out the sample JSON and line 7 for how to add phone numbers. You can call `sendToGroup()` to actually execute the text. Note that you can send to a flat out JSON array like this:

```
[
   "9999999999",
   "888888888"
]
```
or something more complex with keys by using the optional `key` paramter in `sendToGroup`
```
{
  "fake": [
   "9999999999",
   "888888888"
  ]

}
```

Only one level of key nesting is supported. 
## License
MIT
