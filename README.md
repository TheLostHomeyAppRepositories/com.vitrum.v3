
App for Vitrum switches supporting SDK3

Supported devices:
- EU On-Off (I, II, III, IV, VI)
- EU Roller Shutter
- BS Satellite  (I, II, IV)
- BS On-Off  (I, II, IV)

You can send me productTypeId and productId, if you want to add other devices.


New Vitrum Zwave Plus products are handled now in their own drivers:

| ProductID     | ProductTypeID | Product Code  | Description       | Driver            |
| --------      | -------       | -------       | -------           | -------           |
| 0x1062        | 0x7161        | 01E06H062     | 6 BUTTONS TRIAC   | vitrum_6_triac_eu |
| 0x0F93        | 0x7092        | 01E03H020     | 3 BUTTONS RELAY   | vitrum_3_relay_eu |
| 0x0F74        | 0x7073        | 01E01H020     | 1 BUTTON RELAY    | vitrum_1_relay_eu |

Support for CENTRAL_SCENE has been added only for the 3 devices mentioned above. When a button is set in this mode, you can trigger flows on events like "Button Pressed", "Button  Hold" and "Button Released". When adding a trigger for your flow, make sure to add the card from the Vitrum App and NOT from the selected switch, otherwise it won't work.