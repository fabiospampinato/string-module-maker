
/* HELPERS */

const escape = ( str: string ): string => {
  return str.replace ( /[\\`]/g, char => `\\${char}` );
};

/* MAIN */

const ModuleMaker = {

  /* API */

  toRaw: ( str: string ): string => {

    return `\`${escape ( str )}\``;

  },

  toCJS: ( str: string ): string => {

    return `module.exports = ${ModuleMaker.toRaw ( str )};`;

  },

  toESM: ( str: string ): string => {

    return `export default ${ModuleMaker.toRaw ( str )};`;

  }

};

/* EXPORT */

export default ModuleMaker;
