
App for Vitrum switches supporting SDK3

Supported devices:
- EU On-Off (I, II, III, IV, VI)
- EU Triac (IV, VI)
- EU Roller Shutter
- BS Satellite  (I, II, IV)
- BS On-Off  (I, II, IV)

You can send me productTypeId and productId, if you want to add other devices.


New Vitrum Zwave Plus products are handled now in their own drivers:

| ProductID     | ProductTypeID | Product Code  | Description       | Driver            |
| --------      | -------       | -------       | -------           | -------           |
| 0x4099        | 0x28930       | 01E04H030     | 4 BUTTONS TRIAC   | vitrum_4_triac_eu |


Support for CENTRAL_SCENE has been added only for the 3 devices mentioned above. When a button is set in this mode, you can trigger flows on events like "Button Pressed", "Button  Hold" and "Button Released". When adding a trigger for your flow, make sure to add the card from the Vitrum App and NOT from the selected switch, otherwise it won't work.