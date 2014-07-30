'use strict';

var helper = require('./test_helper');
var validate = require('../lib/validation/parameter');

describe('object', function() {

  describe('basic tests', function() {
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'number' }
        }
      }
    };

    it('should validate with parameter null', function() {
      var ret = validate(helper.makeParam('Test', false), null, model);
      helper.validateSuccess(ret, 0);
    });

    it('should validate with parameter undefined', function() {
      var ret = validate(helper.makeParam('Test', false), undefined, model);
      helper.validateSuccess(ret, 0);
    });

    it('should validate with parameter empty', function() {
      var ret = validate(helper.makeParam('Test', false), {}, model);
      helper.validateSuccess(ret, 1, [JSON.stringify({})]);
    });

    it('should not validate with required parameter null', function() {
      var ret = validate(helper.makeParam('Test', true), null, model);
      helper.validateError(ret, 1, ["testParam is required"]);
    });

    it('should not validate with required parameter undefined', function() {
      var ret = validate(helper.makeParam('Test', true), undefined, model);
      helper.validateError(ret, 1, ["testParam is required"]);
    });

    it('should not validate with array', function() {
      var ret = validate(helper.makeParam('Test', true), [], model);
      helper.validateError(ret, 1, ["testParam is not a type of object"]);
    });

    it('should not validate with Number', function() {
      var ret = validate(helper.makeParam('Test', true), 12, model);
      helper.validateError(ret, 1, ["testParam is not a type of object"]);
    });

    it('should not validate with string', function() {
      var ret = validate(helper.makeParam('Test', true), 'thisisastring', model);
      helper.validateError(ret, 1, ["testParam is not a type of object"]);
    });
  });

  describe('one number no format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'number' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of number"]);
    });
  });

  describe('one number float format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'number', format: 'float' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1.233242};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of float"]);
    });
  });

  describe('one number double format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'number', format: 'double' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1.233242 };
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of double"]);
    });
  });

  describe('one integer no format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'integer' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of integer"]);
    });
  });

  describe('one integer int32 format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'integer', format: 'int32' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of int32"]);
    });
  });

  describe('one integer int64 format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'integer', format: 'int64' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1.235641231};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: '  '}, model);
      helper.validateError(ret, 1, ["id is not a type of int64"]);
    });
  });

  describe('one string no format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'string' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 'this is a string'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: {}}, model);
      helper.validateError(ret, 1, ["id is not a type of string"]);
    });
  });

  describe('one string byte format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'string', format: 'byte' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: [65, 43]};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });
  });

  describe('one string date format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'string', format: 'date' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: '8/8/2014'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });
  });

  describe('one string date-time format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'string', format: 'date-time' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: '8/9/2014 12:43 PM'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });
  });

  describe('one boolean no format not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          id: { type: 'boolean' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 'true'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', false), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of boolean"]);
    });
  });

  describe('one number no format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'number' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of number"]);
    });
  });

  describe('one number float format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'number', format: 'float' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1.233242};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of float"]);
    });
  });

  describe('one number double format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'number', format: 'double' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1.233242};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of double"]);
    });
  });

  describe('one integer no format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'integer' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of integer"]);
    });
  });

  describe('one integer int32 format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'integer', format: 'int32' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of int32"]);
    });
  });

  describe('one integer int64 format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'integer', format: 'int64' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 1};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: ' '}, model);
      helper.validateError(ret, 1, ["id is not a type of int64"]);
    });
  });

  describe('one string no format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'string' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: 'this is a string'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: {}}, model);
      helper.validateError(ret, 1, ["id is not a type of string"]);
    });
  });

  describe('one string byte format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'byte' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: [65, 43]};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });
  });

  describe('one string date format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'date' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: '8/8/2014'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });
  });

  describe('one string date-time format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'string', format: 'date-time' }
        }
      }
    };

    it('should validate', function() {
      var value = { id: '8/9/2014 12:43 PM'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });
  });

  describe('one boolean no format required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['id'],
        properties: {
          id: { type: 'boolean' }
        }
      }
    };

    it('should validate', function() {
      var value =  { id: 'true'};
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate with missing parameter', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 1, ["id is required"]);
    });

    it('should not validate', function() {
      var ret = validate(helper.makeParam('Test', true), { id: 'thisisastring'}, model);
      helper.validateError(ret, 1, ["id is not a type of boolean"]);
    });
  });

  describe('one of each type not required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        properties: {
          number: { type: 'number' },
          float: { type: 'number', format: 'float' },
          double: { type: 'number', format: 'double' },
          integer: { type: 'integer' },
          int32: { type: 'integer', format: 'int32' },
          int64: { type: 'integer', format: 'int64' },
          string: { type: 'string' },
          byte: { type: 'string', format: 'byte' },
          date: { type: 'string', format: 'date' },
          datetime: { type: 'string', format: 'date-time' },
          boolean: { type: 'boolean' }
        }
      }
    };

    it('should validate', function() {
      var value =  {
        number: 0x33,
        float: -2.231231,
        double: Number.MIN_VALUE,
        integer: 2e0,
        int32: -2312,
        int64: Number.MAX_VALUE,
        string: 'ThisIsAString ThatContains Many Spaces',
        byte: [35, 98],
        date: '8/9/2013',
        datetime: '1/1/2014 5:00PM',
        boolean: true
      };
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate all invalid', function() {
      var ret = validate(helper.makeParam('Test', true), {
        number: 'Random String',
        float: true,
        double: [323.33],
        integer: {},
        int32: Number.MIN_VALUE,
        int64: Number.MAX_VALUE + Number.MAX_VALUE,
        string: 1,
        byte: false,
        date: Number(1),
        datetime: Number(2.23526),
        boolean: 'Not a boolean'
      }, model);
      helper.validateError(ret, 8, ['boolean is not a type of boolean', 'double is not a type of double', 'float is not a type of float', 'int32 is not a type of int32', 'int64 is not a type of int64', 'integer is not a type of integer', 'number is not a type of number', 'string is not a type of string']);
    });

    it('should not validate half invalid', function() {
      var ret = validate(helper.makeParam('Test', true), {
        number: 'Random String',
        float: true,
        double: [323.33],
        integer: {},
        int32: -2312,
        int64: -Number.MIN_VALUE,
        string: 'ThisIsAString ThatContains Many Spaces',
        byte: [35, 98],
        date: '8/9/2013',
        datetime: '1/1/2014 5:00PM',
        boolean: true
      }, model);
      helper.validateError(ret, 4, ['double is not a type of double', 'float is not a type of float', 'integer is not a type of integer', 'number is not a type of number']);
    });

    it('should not validate other half invalid', function() {
      var ret = validate(helper.makeParam('Test', true), {
        number: 0x33,
        float: -2.231231,
        double: -Number.MIN_VALUE,
        integer: 2e8,
        int32: Number.MIN_VALUE,
        int64: Number.MAX_VALUE + Number.MAX_VALUE,
        string: 1,
        byte: false,
        date: Number(1),
        datetime: Number(2.3265),
        boolean: 'Not a boolean'
      }, model);
      helper.validateError(ret, 4, ['boolean is not a type of boolean', 'int32 is not a type of int32', 'int64 is not a type of int64', 'string is not a type of string']);
    });
  });

  describe('one of each type required', function() {
    // each section defines it's own validation parameters
    var model = {
      Test: {
        id: 'Test',
        name: 'Test',
        required: ['param1', 'param2', 'param3', 'param4', 'param5', 'param6', 'param7', 'param8', 'param9', 'param10', 'param11'],
        properties: {
          param1: { type: 'number' },
          param2: { type: 'number', format: 'float' },
          param3: { type: 'number', format: 'double' },
          param4: { type: 'integer' },
          param5: { type: 'integer', format: 'int32' },
          param6: { type: 'integer', format: 'int64' },
          param7: { type: 'string' },
          param8: { type: 'string', format: 'byte' },
          param9: { type: 'string', format: 'date' },
          param10: { type: 'string', format: 'date-time' },
          param11: { type: 'boolean' }
        }
      }
    };

    it('should validate', function() {
      var value = {
        param1: 0x33,
        param2: -2.231231,
        param3: Number.MIN_VALUE,
        param4: 2e0,
        param5: -2312,
        param6: Number.MAX_VALUE,
        param7: 'ThisIsAString ThatContains Many Spaces',
        param8: [35, 98],
        param9: '8/9/2013',
        param10: '1/1/2014 5:00PM',
        param11: true
      };
      var ret = validate(helper.makeParam('Test', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate all missing', function() {
      var ret = validate(helper.makeParam('Test', true), {}, model);
      helper.validateError(ret, 11, ['param1 is required', 'param10 is required', 'param11 is required', 'param2 is required', 'param3 is required', 'param4 is required', 'param5 is required', 'param6 is required', 'param7 is required', 'param8 is required', 'param9 is required']);
    });
  });

  describe('one of each type with two level inheritance not required', function() {
    // each section defines it's own validation parameters
    var model = {
      foo: {
        id: 'foo',
        name: 'foo',
        subTypes: ["bar"],
        discriminator: "name",
        properties: {
          number: { type: 'number' },
          float: { type: 'number', format: 'float' },
          double: { type: 'number', format: 'double' },
          integer: { type: 'integer' },
          int32: { type: 'integer', format: 'int32' }
        }
      },
      bar: {
        id: 'bar',
        name: 'bar',
        subTypes: ["baz"],
        discriminator: "name",
        properties: {
          int64: { type: 'integer', format: 'int64' },
          string: { type: 'string' },
          byte: { type: 'string', format: 'byte' },
          date: { type: 'string', format: 'date' },
          datetime: { type: 'string', format: 'date-time' }
        }
      },
      baz: {
        id: 'baz',
        name: 'baz',
        properties: {
          boolean: { type: 'boolean' }
        }
      }
    };

    it('should validate', function() {
      var value = {
        number: 0x33,
        float: -2.231231,
        double: Number.MIN_VALUE,
        integer: 2e0,
        int32: -2312,
        int64: Number.MAX_VALUE,
        string: 'ThisIsAString ThatContains Many Spaces',
        byte: [35, 98],
        date: '8/9/2013',
        datetime: '1/1/2014 5:00PM',
        boolean: true
      };
      var ret = validate(helper.makeParam('baz', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate all invalid', function() {
      var ret = validate(helper.makeParam('baz', true), {
        number: 'Random String',
        float: true,
        double: [323.33],
        integer: {},
        int32: Number.MIN_VALUE,
        int64: Number.MAX_VALUE + Number.MAX_VALUE,
        string: 1,
        byte: false,
        date: Number(1),
        datetime: Number(2.2356),
        boolean: 'Not a boolean'
      }, model);
      helper.validateError(ret, 8, ['boolean is not a type of boolean', 'double is not a type of double', 'float is not a type of float', 'int32 is not a type of int32', 'int64 is not a type of int64', 'integer is not a type of integer', 'number is not a type of number', 'string is not a type of string']);
    });

    it('should not validate half invalid', function() {
      var ret = validate(helper.makeParam('baz', true), {
        number: 'Random String',
        float: true,
        double: [323.33],
        integer: {},
        int32: -2312,
        int64: -Number.MIN_VALUE,
        string: 'ThisIsAString ThatContains Many Spaces',
        byte: [35, 98],
        date: '8/9/2013',
        datetime: '1/1/2014 5:00PM',
        boolean: true
      }, model);
      helper.validateError(ret, 4, ['double is not a type of double', 'float is not a type of float', 'integer is not a type of integer', 'number is not a type of number']);
    });

    it('should not validate other half invalid', function() {
      var ret = validate(helper.makeParam('baz', true), {
        number: 0x33,
        float: -2.231231,
        double: -Number.MIN_VALUE,
        integer: 2e8,
        int32: Number.MIN_VALUE,
        int64: Number.MAX_VALUE + Number.MAX_VALUE,
        string: 1,
        byte: false,
        date: Number(1),
        datetime: Number(2.2356),
        boolean: 'Not a boolean'
      }, model);
      helper.validateError(ret, 4, ['boolean is not a type of boolean', 'int32 is not a type of int32', 'int64 is not a type of int64', 'string is not a type of string']);
    });
  });

  describe('one of each type with two level inheritance required', function() {
    // each section defines it's own validation parameters
    var model = {
      foo: {
        id: 'foo',
        name: 'foo',
        subTypes: ["bar"],
        discriminator: "name",
        required: ['number', 'float', 'double', 'integer', 'int32'],
        properties: {
          number: { type: 'number' },
          float: { type: 'number', format: 'float' },
          double: { type: 'number', format: 'double' },
          integer: { type: 'integer' },
          int32: { type: 'integer', format: 'int32' }
        }
      },
      bar: {
        id: 'bar',
        name: 'bar',
        subTypes: ["baz"],
        discriminator: "name",
        required: ['int64', 'string', 'byte', 'date', 'datetime'],
        properties: {
          int64: { type: 'integer', format: 'int64' },
          string: { type: 'string' },
          byte: { type: 'string', format: 'byte' },
          date: { type: 'string', format: 'date' },
          datetime: { type: 'string', format: 'date-time' }
        }
      },
      baz: {
        id: 'baz',
        name: 'baz',
        required: ['boolean'],
        properties: {
          boolean: { type: 'boolean' }
        }
      }
    };

    it('should validate', function() {
      var value = {
        number: 0x33,
        float: -2.231231,
        double: Number.MIN_VALUE,
        integer: 2e0,
        int32: -2312,
        int64: Number.MAX_VALUE,
        string: 'ThisIsAString ThatContains Many Spaces',
        byte: [35, 98],
        date: '8/9/2013',
        datetime: '1/1/2014 5:00PM',
        boolean: true
      };
      var ret = validate(helper.makeParam('baz', false), value, model);
      helper.validateSuccess(ret, 1, [JSON.stringify(value)]);
    });

    it('should not validate all invalid', function() {
      var ret = validate(helper.makeParam('baz', true), {
        number: 'Random String',
        float: true,
        double: [323.33],
        integer: {},
        int32: Number.MIN_VALUE,
        int64: Number.MAX_VALUE + Number.MAX_VALUE,
        string: 1,
        byte: false,
        date: Number(1),
        datetime: Number(2.2356),
        boolean: 'Not a boolean'
      }, model);
      helper.validateError(ret, 8, ['boolean is not a type of boolean', 'double is not a type of double', 'float is not a type of float', 'int32 is not a type of int32', 'int64 is not a type of int64', 'integer is not a type of integer', 'number is not a type of number', 'string is not a type of string']);
    });

    it('should not validate half invalid', function() {
      var ret = validate(helper.makeParam('baz', true), {
        number: 'Random String',
        float: true,
        double: [323.33],
        integer: {},
        int32: -2312,
        int64: -Number.MIN_VALUE,
        string: 'ThisIsAString ThatContains Many Spaces',
        byte: [35, 98],
        date: '8/9/2013',
        datetime: '1/1/2014 5:00PM',
        boolean: true
      }, model);
      helper.validateError(ret, 4, ['double is not a type of double', 'float is not a type of float', 'integer is not a type of integer', 'number is not a type of number']);
    });

    it('should not validate other half invalid', function() {
      var ret = validate(helper.makeParam('baz', true), {
        number: 0x33,
        float: -2.231231,
        double: -Number.MIN_VALUE,
        integer: 2e8,
        int32: Number.MIN_VALUE,
        int64: Number.MAX_VALUE + Number.MAX_VALUE,
        string: 1,
        byte: false,
        date: Number(1),
        datetime: Number(2.2356),
        boolean: 'Not a boolean'
      }, model);
      helper.validateError(ret, 4, ['boolean is not a type of boolean', 'int32 is not a type of int32', 'int64 is not a type of int64', 'string is not a type of string']);
    });

    it('should not validate all missing', function() {
      var ret = validate(helper.makeParam('baz', true), {}, model);
      helper.validateError(ret, 11, ['boolean is required', 'byte is required', 'date is required', 'datetime is required', 'double is required', 'float is required', 'int32 is required', 'int64 is required', 'integer is required', 'number is required', 'string is required']);
    });
  });
});