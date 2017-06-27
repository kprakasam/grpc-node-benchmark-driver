/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.grpc.testing.ClientStats', null, global);
goog.exportSymbol('proto.grpc.testing.HistogramData', null, global);
goog.exportSymbol('proto.grpc.testing.HistogramParams', null, global);
goog.exportSymbol('proto.grpc.testing.RequestResultCount', null, global);
goog.exportSymbol('proto.grpc.testing.ServerStats', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.ServerStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.testing.ServerStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.testing.ServerStats.displayName = 'proto.grpc.testing.ServerStats';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.ServerStats.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.ServerStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.ServerStats} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.testing.ServerStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    timeElapsed: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    timeUser: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    timeSystem: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    totalCpuTime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    idleCpuTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    cqPollCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.ServerStats}
 */
proto.grpc.testing.ServerStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.ServerStats;
  return proto.grpc.testing.ServerStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.ServerStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.ServerStats}
 */
proto.grpc.testing.ServerStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeElapsed(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeUser(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeSystem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTotalCpuTime(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIdleCpuTime(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCqPollCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.ServerStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.ServerStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.ServerStats} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.testing.ServerStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimeElapsed();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getTimeUser();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTimeSystem();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTotalCpuTime();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getIdleCpuTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getCqPollCount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional double time_elapsed = 1;
 * @return {number}
 */
proto.grpc.testing.ServerStats.prototype.getTimeElapsed = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.grpc.testing.ServerStats.prototype.setTimeElapsed = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double time_user = 2;
 * @return {number}
 */
proto.grpc.testing.ServerStats.prototype.getTimeUser = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.grpc.testing.ServerStats.prototype.setTimeUser = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double time_system = 3;
 * @return {number}
 */
proto.grpc.testing.ServerStats.prototype.getTimeSystem = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.grpc.testing.ServerStats.prototype.setTimeSystem = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional uint64 total_cpu_time = 4;
 * @return {number}
 */
proto.grpc.testing.ServerStats.prototype.getTotalCpuTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.grpc.testing.ServerStats.prototype.setTotalCpuTime = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional uint64 idle_cpu_time = 5;
 * @return {number}
 */
proto.grpc.testing.ServerStats.prototype.getIdleCpuTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.grpc.testing.ServerStats.prototype.setIdleCpuTime = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional uint64 cq_poll_count = 6;
 * @return {number}
 */
proto.grpc.testing.ServerStats.prototype.getCqPollCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.grpc.testing.ServerStats.prototype.setCqPollCount = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.HistogramParams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.testing.HistogramParams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.testing.HistogramParams.displayName = 'proto.grpc.testing.HistogramParams';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.HistogramParams.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.HistogramParams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.HistogramParams} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.testing.HistogramParams.toObject = function(includeInstance, msg) {
  var f, obj = {
    resolution: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    maxPossible: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.HistogramParams}
 */
proto.grpc.testing.HistogramParams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.HistogramParams;
  return proto.grpc.testing.HistogramParams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.HistogramParams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.HistogramParams}
 */
proto.grpc.testing.HistogramParams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setResolution(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxPossible(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.HistogramParams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.HistogramParams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.HistogramParams} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.testing.HistogramParams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResolution();
  if (f !== 0.0) {
    writer.writeDouble(
      1,
      f
    );
  }
  f = message.getMaxPossible();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
};


/**
 * optional double resolution = 1;
 * @return {number}
 */
proto.grpc.testing.HistogramParams.prototype.getResolution = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramParams.prototype.setResolution = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional double max_possible = 2;
 * @return {number}
 */
proto.grpc.testing.HistogramParams.prototype.getMaxPossible = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramParams.prototype.setMaxPossible = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.HistogramData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.testing.HistogramData.repeatedFields_, null);
};
goog.inherits(proto.grpc.testing.HistogramData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.testing.HistogramData.displayName = 'proto.grpc.testing.HistogramData';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpc.testing.HistogramData.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.HistogramData.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.HistogramData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.HistogramData} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.testing.HistogramData.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucketList: jspb.Message.getField(msg, 1),
    minSeen: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    maxSeen: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    sum: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    sumOfSquares: +jspb.Message.getFieldWithDefault(msg, 5, 0.0),
    count: +jspb.Message.getFieldWithDefault(msg, 6, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.HistogramData}
 */
proto.grpc.testing.HistogramData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.HistogramData;
  return proto.grpc.testing.HistogramData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.HistogramData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.HistogramData}
 */
proto.grpc.testing.HistogramData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Array.<number>} */ (reader.readPackedUint32());
      msg.setBucketList(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinSeen(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaxSeen(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setSumOfSquares(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.HistogramData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.HistogramData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.HistogramData} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.testing.HistogramData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucketList();
  if (f.length > 0) {
    writer.writePackedUint32(
      1,
      f
    );
  }
  f = message.getMinSeen();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getMaxSeen();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getSum();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getSumOfSquares();
  if (f !== 0.0) {
    writer.writeDouble(
      5,
      f
    );
  }
  f = message.getCount();
  if (f !== 0.0) {
    writer.writeDouble(
      6,
      f
    );
  }
};


/**
 * repeated uint32 bucket = 1;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<number>}
 */
proto.grpc.testing.HistogramData.prototype.getBucketList = function() {
  return /** @type {!Array.<number>} */ (jspb.Message.getField(this, 1));
};


/** @param {!Array.<number>} value */
proto.grpc.testing.HistogramData.prototype.setBucketList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!number} value
 * @param {number=} opt_index
 */
proto.grpc.testing.HistogramData.prototype.addBucket = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.grpc.testing.HistogramData.prototype.clearBucketList = function() {
  this.setBucketList([]);
};


/**
 * optional double min_seen = 2;
 * @return {number}
 */
proto.grpc.testing.HistogramData.prototype.getMinSeen = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramData.prototype.setMinSeen = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double max_seen = 3;
 * @return {number}
 */
proto.grpc.testing.HistogramData.prototype.getMaxSeen = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramData.prototype.setMaxSeen = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double sum = 4;
 * @return {number}
 */
proto.grpc.testing.HistogramData.prototype.getSum = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramData.prototype.setSum = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * optional double sum_of_squares = 5;
 * @return {number}
 */
proto.grpc.testing.HistogramData.prototype.getSumOfSquares = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramData.prototype.setSumOfSquares = function(value) {
  jspb.Message.setField(this, 5, value);
};


/**
 * optional double count = 6;
 * @return {number}
 */
proto.grpc.testing.HistogramData.prototype.getCount = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 6, 0.0));
};


/** @param {number} value */
proto.grpc.testing.HistogramData.prototype.setCount = function(value) {
  jspb.Message.setField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.RequestResultCount = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.grpc.testing.RequestResultCount, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.testing.RequestResultCount.displayName = 'proto.grpc.testing.RequestResultCount';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.RequestResultCount.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.RequestResultCount.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.RequestResultCount} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.testing.RequestResultCount.toObject = function(includeInstance, msg) {
  var f, obj = {
    statusCode: jspb.Message.getFieldWithDefault(msg, 1, 0),
    count: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.RequestResultCount}
 */
proto.grpc.testing.RequestResultCount.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.RequestResultCount;
  return proto.grpc.testing.RequestResultCount.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.RequestResultCount} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.RequestResultCount}
 */
proto.grpc.testing.RequestResultCount.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatusCode(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.RequestResultCount.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.RequestResultCount.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.RequestResultCount} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.testing.RequestResultCount.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatusCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int32 status_code = 1;
 * @return {number}
 */
proto.grpc.testing.RequestResultCount.prototype.getStatusCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.grpc.testing.RequestResultCount.prototype.setStatusCode = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional int64 count = 2;
 * @return {number}
 */
proto.grpc.testing.RequestResultCount.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.grpc.testing.RequestResultCount.prototype.setCount = function(value) {
  jspb.Message.setField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.grpc.testing.ClientStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.grpc.testing.ClientStats.repeatedFields_, null);
};
goog.inherits(proto.grpc.testing.ClientStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.grpc.testing.ClientStats.displayName = 'proto.grpc.testing.ClientStats';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.grpc.testing.ClientStats.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.grpc.testing.ClientStats.prototype.toObject = function(opt_includeInstance) {
  return proto.grpc.testing.ClientStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.grpc.testing.ClientStats} msg The msg instance to transform.
 * @return {!Object}
 */
proto.grpc.testing.ClientStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    latencies: (f = msg.getLatencies()) && proto.grpc.testing.HistogramData.toObject(includeInstance, f),
    timeElapsed: +jspb.Message.getFieldWithDefault(msg, 2, 0.0),
    timeUser: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    timeSystem: +jspb.Message.getFieldWithDefault(msg, 4, 0.0),
    requestResultsList: jspb.Message.toObjectList(msg.getRequestResultsList(),
    proto.grpc.testing.RequestResultCount.toObject, includeInstance),
    cqPollCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.grpc.testing.ClientStats}
 */
proto.grpc.testing.ClientStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.grpc.testing.ClientStats;
  return proto.grpc.testing.ClientStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.grpc.testing.ClientStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.grpc.testing.ClientStats}
 */
proto.grpc.testing.ClientStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.grpc.testing.HistogramData;
      reader.readMessage(value,proto.grpc.testing.HistogramData.deserializeBinaryFromReader);
      msg.setLatencies(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeElapsed(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeUser(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setTimeSystem(value);
      break;
    case 5:
      var value = new proto.grpc.testing.RequestResultCount;
      reader.readMessage(value,proto.grpc.testing.RequestResultCount.deserializeBinaryFromReader);
      msg.addRequestResults(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCqPollCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.grpc.testing.ClientStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.grpc.testing.ClientStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.grpc.testing.ClientStats} message
 * @param {!jspb.BinaryWriter} writer
 */
proto.grpc.testing.ClientStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLatencies();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.grpc.testing.HistogramData.serializeBinaryToWriter
    );
  }
  f = message.getTimeElapsed();
  if (f !== 0.0) {
    writer.writeDouble(
      2,
      f
    );
  }
  f = message.getTimeUser();
  if (f !== 0.0) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = message.getTimeSystem();
  if (f !== 0.0) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = message.getRequestResultsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.grpc.testing.RequestResultCount.serializeBinaryToWriter
    );
  }
  f = message.getCqPollCount();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
};


/**
 * optional HistogramData latencies = 1;
 * @return {?proto.grpc.testing.HistogramData}
 */
proto.grpc.testing.ClientStats.prototype.getLatencies = function() {
  return /** @type{?proto.grpc.testing.HistogramData} */ (
    jspb.Message.getWrapperField(this, proto.grpc.testing.HistogramData, 1));
};


/** @param {?proto.grpc.testing.HistogramData|undefined} value */
proto.grpc.testing.ClientStats.prototype.setLatencies = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.grpc.testing.ClientStats.prototype.clearLatencies = function() {
  this.setLatencies(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.grpc.testing.ClientStats.prototype.hasLatencies = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double time_elapsed = 2;
 * @return {number}
 */
proto.grpc.testing.ClientStats.prototype.getTimeElapsed = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.grpc.testing.ClientStats.prototype.setTimeElapsed = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional double time_user = 3;
 * @return {number}
 */
proto.grpc.testing.ClientStats.prototype.getTimeUser = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.grpc.testing.ClientStats.prototype.setTimeUser = function(value) {
  jspb.Message.setField(this, 3, value);
};


/**
 * optional double time_system = 4;
 * @return {number}
 */
proto.grpc.testing.ClientStats.prototype.getTimeSystem = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.grpc.testing.ClientStats.prototype.setTimeSystem = function(value) {
  jspb.Message.setField(this, 4, value);
};


/**
 * repeated RequestResultCount request_results = 5;
 * If you change this array by adding, removing or replacing elements, or if you
 * replace the array itself, then you must call the setter to update it.
 * @return {!Array.<!proto.grpc.testing.RequestResultCount>}
 */
proto.grpc.testing.ClientStats.prototype.getRequestResultsList = function() {
  return /** @type{!Array.<!proto.grpc.testing.RequestResultCount>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.grpc.testing.RequestResultCount, 5));
};


/** @param {!Array.<!proto.grpc.testing.RequestResultCount>} value */
proto.grpc.testing.ClientStats.prototype.setRequestResultsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.grpc.testing.RequestResultCount=} opt_value
 * @param {number=} opt_index
 * @return {!proto.grpc.testing.RequestResultCount}
 */
proto.grpc.testing.ClientStats.prototype.addRequestResults = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.grpc.testing.RequestResultCount, opt_index);
};


proto.grpc.testing.ClientStats.prototype.clearRequestResultsList = function() {
  this.setRequestResultsList([]);
};


/**
 * optional uint64 cq_poll_count = 6;
 * @return {number}
 */
proto.grpc.testing.ClientStats.prototype.getCqPollCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.grpc.testing.ClientStats.prototype.setCqPollCount = function(value) {
  jspb.Message.setField(this, 6, value);
};


goog.object.extend(exports, proto.grpc.testing);
