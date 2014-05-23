Project SandBox


### - Marionette Structure
This Project use marionette on top of backbone with an opiniated structure 
![marionette stack](https://s3.amazonaws.com/uploads.hipchat.com/30445/261935/hRuymcUmLNMKIPz/upload.png)
- Application Object
		- Starting hub of the application
        - Encapsulation and namespace
        - Set up initial configuration (pass bootstrap data or any informations)
- Application Regions
		- Defines the major structural aspects of your applciation e.g ( header_region, main_region, footer_region)
        - Allows you to insert any view type in a region 
        - Automaticly cleanup old views when new one are displayed
- Modules
		- Independant top level applications
        - Highest level of responsability
        - They can be started or shutdown 
        - commonly they are long lived object but not necesseraly 
        - can attach an unlimited sub modules 
- App Router
		- Typically defined in the top level modules
        - Each modules hold it's own router and functionality this make the code a lot easier to read, and divide responsabilities between modules
        - It also reduce boilerplate
- Controller
		- Instancieted or long lived
        - Responsible for managing within the submodules
        - Manage entities
        - Instantiate and wire up views
        - Respond to view events
        - Bubble up information to parent module
- Layout
		- Ability to define a set of regions you wish to insert views In
        - Makes managing nested biews a lot eqsier
        - Can customize region object to add functionality e.g: transitions, fade-In...
- Regions
		- Manage showing and closing specific views
        - Will close previsouly shown views and initiate cleanup and unbinding
        - Will automaticly render views when they are shown    
- Messaging Bug
		- Trigger and manage events at the module or application level
        - Facilities Command Pub/Sub and Request/Response patterns
        - Facilitate decoupling componenet or modules



        The folder javascripts/apps/{module name} is our holder for the modules they should be totally independent from each other, and communicate only by events (