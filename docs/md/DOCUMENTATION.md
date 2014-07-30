#Index

**Namespaces**

* [Polyfills](#Polyfills)
  * [Polyfills.isInteger(nVal)](#Polyfills.isInteger)
* [Validation](#Validation)
  * [Validation.Validate_ParamType(param, req, [models])](#Validation.Validate_ParamType)
  * [Validation.Validate_Parameter(param, value, [models])](#Validation.Validate_Parameter)
  * [Validation.Validate(operation, req, [models])](#Validation.Validate)
  * [Validation.ParamTypes](#Validation.ParamTypes)
    * [ParamTypes.Validate_Body(param, req, [models])](#Validation.ParamTypes.Validate_Body)
    * [ParamTypes.Validate_Form(param, req, [models])](#Validation.ParamTypes.Validate_Form)
    * [ParamTypes.Validate_Header(param, req, [models])](#Validation.ParamTypes.Validate_Header)
    * [ParamTypes.Validate_ParamType(param, value, [models], [allowMultiple])](#Validation.ParamTypes.Validate_ParamType)
    * [ParamTypes.Validate_Header(param, req, [models])](#Validation.ParamTypes.Validate_Header)
    * [ParamTypes.Validate_Query(param, req, [models])](#Validation.ParamTypes.Validate_Query)
  * [Validation.Parameters](#Validation.Parameters)
    * [Parameters.Validate_Array(param, value, [models])](#Validation.Parameters.Validate_Array)
    * [Parameters.Validate_Boolean(param, value)](#Validation.Parameters.Validate_Boolean)
    * [Parameters.Validate_Byte(param, value)](#Validation.Parameters.Validate_Byte)
    * [Parameters.Validate_Date(param, value)](#Validation.Parameters.Validate_Date)
    * [Parameters.Validate_Datetime(param, value)](#Validation.Parameters.Validate_Datetime)
    * [Parameters.Validate_File(param, value)](#Validation.Parameters.Validate_File)
    * [Parameters.Return_Error(err, [errArgs])](#Validation.Parameters.Return_Error)
    * [Parameters.Return_Success(val)](#Validation.Parameters.Return_Success)
    * [Parameters.Validate_Integer(param, value)](#Validation.Parameters.Validate_Integer)
    * [Parameters.Validate_Integer_Formats(param, value)](#Validation.Parameters.Validate_Integer_Formats)
    * [Parameters.Validate_Number(param, value)](#Validation.Parameters.Validate_Number)
    * [Parameters.Validate_Number_Formats(param, value)](#Validation.Parameters.Validate_Number_Formats)
    * [Parameters.Validate_Object(param, value, models)](#Validation.Parameters.Validate_Object)
    * [Parameters.Validate_Object_Formats(param, value, models)](#Validation.Parameters.Validate_Object_Formats)
    * [Parameters.Validate_String(param, value)](#Validation.Parameters.Validate_String)
    * [Parameters.Validate_String_Formats(param, value)](#Validation.Parameters.Validate_String_Formats)
 
<a name="Polyfills"></a>
#Polyfills
**Members**

* [Polyfills](#Polyfills)
  * [Polyfills.isInteger(nVal)](#Polyfills.isInteger)

<a name="Polyfills.isInteger"></a>
##Polyfills.isInteger(nVal)
This is a polyfill for checking if something is an integer. This is proposed functionality in ECMA6 (aka Harmony). <br/>

**Params**

- nVal `Object` - The value to be checked  

**Returns**: `Boolean` - True if <tt>nVal</tt> can successfully be parsed as an Integer, else false.  
<a name="Validation"></a>
#Validation
**Members**

* [Validation](#Validation)
  * [Validation.Validate_ParamType(param, req, [models])](#Validation.Validate_ParamType)
  * [Validation.Validate_Parameter(param, value, [models])](#Validation.Validate_Parameter)
  * [Validation.Validate(operation, req, [models])](#Validation.Validate)
  * [Validation.ParamTypes](#Validation.ParamTypes)
    * [ParamTypes.Validate_Body(param, req, [models])](#Validation.ParamTypes.Validate_Body)
    * [ParamTypes.Validate_Form(param, req, [models])](#Validation.ParamTypes.Validate_Form)
    * [ParamTypes.Validate_Header(param, req, [models])](#Validation.ParamTypes.Validate_Header)
    * [ParamTypes.Validate_ParamType(param, value, [models], [allowMultiple])](#Validation.ParamTypes.Validate_ParamType)
    * [ParamTypes.Validate_Header(param, req, [models])](#Validation.ParamTypes.Validate_Header)
    * [ParamTypes.Validate_Query(param, req, [models])](#Validation.ParamTypes.Validate_Query)
  * [Validation.Parameters](#Validation.Parameters)
    * [Parameters.Validate_Array(param, value, [models])](#Validation.Parameters.Validate_Array)
    * [Parameters.Validate_Boolean(param, value)](#Validation.Parameters.Validate_Boolean)
    * [Parameters.Validate_Byte(param, value)](#Validation.Parameters.Validate_Byte)
    * [Parameters.Validate_Date(param, value)](#Validation.Parameters.Validate_Date)
    * [Parameters.Validate_Datetime(param, value)](#Validation.Parameters.Validate_Datetime)
    * [Parameters.Validate_File(param, value)](#Validation.Parameters.Validate_File)
    * [Parameters.Return_Error(err, [errArgs])](#Validation.Parameters.Return_Error)
    * [Parameters.Return_Success(val)](#Validation.Parameters.Return_Success)
    * [Parameters.Validate_Integer(param, value)](#Validation.Parameters.Validate_Integer)
    * [Parameters.Validate_Integer_Formats(param, value)](#Validation.Parameters.Validate_Integer_Formats)
    * [Parameters.Validate_Number(param, value)](#Validation.Parameters.Validate_Number)
    * [Parameters.Validate_Number_Formats(param, value)](#Validation.Parameters.Validate_Number_Formats)
    * [Parameters.Validate_Object(param, value, models)](#Validation.Parameters.Validate_Object)
    * [Parameters.Validate_Object_Formats(param, value, models)](#Validation.Parameters.Validate_Object_Formats)
    * [Parameters.Validate_String(param, value)](#Validation.Parameters.Validate_String)
    * [Parameters.Validate_String_Formats(param, value)](#Validation.Parameters.Validate_String_Formats)

<a name="Validation.Validate_ParamType"></a>
##Validation.Validate_ParamType(param, req, [models])
Ensures that the <tt>req</tt> that is passed in on the req is valid based upon the Swagger definition for this operation.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Validate_Parameter"></a>
##Validation.Validate_Parameter(param, value, [models])
Ensures that the <tt>value</tt> that is passed in on the req is valid based upon the Swagger definition for this operation.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Validate"></a>
##Validation.Validate(operation, req, [models])
Validates the <tt>req</tt> against the <tt>operation</tt> that was defined.

**Params**

- operation `Object` - The operation that this is validating  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.ParamTypes"></a>
##Validation.ParamTypes
**Members**

* [Validation.ParamTypes](#Validation.ParamTypes)
  * [ParamTypes.Validate_Body(param, req, [models])](#Validation.ParamTypes.Validate_Body)
  * [ParamTypes.Validate_Form(param, req, [models])](#Validation.ParamTypes.Validate_Form)
  * [ParamTypes.Validate_Header(param, req, [models])](#Validation.ParamTypes.Validate_Header)
  * [ParamTypes.Validate_ParamType(param, value, [models], [allowMultiple])](#Validation.ParamTypes.Validate_ParamType)
  * [ParamTypes.Validate_Header(param, req, [models])](#Validation.ParamTypes.Validate_Header)
  * [ParamTypes.Validate_Query(param, req, [models])](#Validation.ParamTypes.Validate_Query)

<a name="Validation.ParamTypes.Validate_Body"></a>
###ParamTypes.Validate_Body(param, req, [models])
Validates the body of the <tt>req</tt> that called validation.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.ParamTypes.Validate_Form"></a>
###ParamTypes.Validate_Form(param, req, [models])
Validates the form of the <tt>req</tt> that called validation.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.ParamTypes.Validate_Header"></a>
###ParamTypes.Validate_Header(param, req, [models])
Validates the header of the <tt>req</tt> that called validation. Additionally, this will honor

**Params**

- param `Object` - The Swagger param that was created for this operation  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.ParamTypes.Validate_ParamType"></a>
###ParamTypes.Validate_ParamType(param, value, [models], [allowMultiple])
Validates the form of the <tt>req</tt> that called validation.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that was passed to be validated  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  
- \[allowMultiple=false\] `Boolean` - True if this <tt>param</tt> allowed multiple and the param type allows multiple, else false  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.ParamTypes.Validate_Header"></a>
###ParamTypes.Validate_Header(param, req, [models])
Validates the path of the <tt>req</tt> that called validation. Additionally, this will honor

**Params**

- param `Object` - The Swagger param that was created for this operation  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.ParamTypes.Validate_Query"></a>
###ParamTypes.Validate_Query(param, req, [models])
Validates the query string of the <tt>req</tt> that called validation. Additionally, this will honor

**Params**

- param `Object` - The Swagger param that was created for this operation  
- req `Object` - The request that this is validating  
- \[models\] `Object` - Optionally, the models that are defined as part of this Swagger API definition  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters"></a>
##Validation.Parameters
**Members**

* [Validation.Parameters](#Validation.Parameters)
  * [Parameters.Validate_Array(param, value, [models])](#Validation.Parameters.Validate_Array)
  * [Parameters.Validate_Boolean(param, value)](#Validation.Parameters.Validate_Boolean)
  * [Parameters.Validate_Byte(param, value)](#Validation.Parameters.Validate_Byte)
  * [Parameters.Validate_Date(param, value)](#Validation.Parameters.Validate_Date)
  * [Parameters.Validate_Datetime(param, value)](#Validation.Parameters.Validate_Datetime)
  * [Parameters.Validate_File(param, value)](#Validation.Parameters.Validate_File)
  * [Parameters.Return_Error(err, [errArgs])](#Validation.Parameters.Return_Error)
  * [Parameters.Return_Success(val)](#Validation.Parameters.Return_Success)
  * [Parameters.Validate_Integer(param, value)](#Validation.Parameters.Validate_Integer)
  * [Parameters.Validate_Integer_Formats(param, value)](#Validation.Parameters.Validate_Integer_Formats)
  * [Parameters.Validate_Number(param, value)](#Validation.Parameters.Validate_Number)
  * [Parameters.Validate_Number_Formats(param, value)](#Validation.Parameters.Validate_Number_Formats)
  * [Parameters.Validate_Object(param, value, models)](#Validation.Parameters.Validate_Object)
  * [Parameters.Validate_Object_Formats(param, value, models)](#Validation.Parameters.Validate_Object_Formats)
  * [Parameters.Validate_String(param, value)](#Validation.Parameters.Validate_String)
  * [Parameters.Validate_String_Formats(param, value)](#Validation.Parameters.Validate_String_Formats)

<a name="Validation.Parameters.Validate_Array"></a>
###Parameters.Validate_Array(param, value, [models])
Ensures that the <tt>value</tt> that is passed in is a valid Array as well as checking that each

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  
- \[models\] `Object` - Any models that are defined for this API  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Boolean"></a>
###Parameters.Validate_Boolean(param, value)
Ensures that the <tt>value</tt> that is passed in is a valid boolean. This only handles native boolean types or

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Byte"></a>
###Parameters.Validate_Byte(param, value)
There is no validation to be done for this type, but it is valid.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Date"></a>
###Parameters.Validate_Date(param, value)
There is no definitive definition in the swagger spec as to what constitutes a valid date or date-time

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Datetime"></a>
###Parameters.Validate_Datetime(param, value)
There is no definitive definition in the swagger spec as to what constitutes a valid date or date-time

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_File"></a>
###Parameters.Validate_File(param, value)
There is no validation to be done for this type, but it is valid.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req via a form  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Return_Error"></a>
###Parameters.Return_Error(err, [errArgs])
Used by the [Parameters](#Validation.Parameters) to indicate that a particular <tt>value</tt> did not pass validation.

**Params**

- err `string` - The error message to get returned. If <tt>errArgs</tt> is provided, then this will call util.format().  
- \[errArgs\] `string` | `Array` - Optionally, the args to get passed to util.format().  

**Returns**: `Array` - An array containing an object with an error property (which contains an Array of Error objects)  
<a name="Validation.Parameters.Return_Success"></a>
###Parameters.Return_Success(val)
Used by the [Parameters](#Validation.Parameters) to indicate that a particular <tt>value</tt> passed validation.

**Params**

- val `Object` - The successfully parsed and validated value.  

**Returns**: `Array` - An array containing an object with a value property that contains the value parsed successfully. This is done as
<a name="Validation.Parameters.Validate_Integer"></a>
###Parameters.Validate_Integer(param, value)
Ensures that the <tt>value</tt> that is passed in is a valid integer (or an integer with a format of int32).

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Integer_Formats"></a>
###Parameters.Validate_Integer_Formats(param, value)
Redirects the different Integer formats to their respective validation methods. For now, all types of Integer

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Number"></a>
###Parameters.Validate_Number(param, value)
Ensures that the <tt>value</tt> that is passed in is a valid number (or a number with a formats of int32, double, float, or long

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Number_Formats"></a>
###Parameters.Validate_Number_Formats(param, value)
Redirects the different Number formats to their respective validation methods. For now, all types of Number

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Object"></a>
###Parameters.Validate_Object(param, value, models)
Ensures that the <tt>value</tt> that is passed in is a valid Object by iterating through each property on the

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, form, etc.)  
- models `Object` - Any models that are defined for this API  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_Object_Formats"></a>
###Parameters.Validate_Object_Formats(param, value, models)
Redirects to the validate object method if this is a valid object in the model, else error.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  
- models `Object` - Any models that are defined for this API  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_String"></a>
###Parameters.Validate_String(param, value)
Ensures that the <tt>value</tt> that is passed in is a valid string. Additionally, if an enum is

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array
<a name="Validation.Parameters.Validate_String_Formats"></a>
###Parameters.Validate_String_Formats(param, value)
Redirects the different String formats to their respective validation methods.

**Params**

- param `Object` - The Swagger param that was created for this operation  
- value `Object` - The value that is passed in along the req (via body, header, etc.)  

**Returns**: `Array` - An empty Array if the <tt>value</tt> was "nothing" and not required, else an array