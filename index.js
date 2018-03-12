/**
 * @file  mofron-comp-svg/index.js
 * @brief common svg component for mofron
 * @author simpart
 */
let mf = require('mofron');

/**
 * @class mofron.comp.Svg
 * @brief svg component for mofron
 */
mf.comp.Svg = class extends mf.Component {
    
    constructor (po) {
        try {
            super();
            this.name('Svg');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @param prm : 
     */
    initDomConts (prm) {
        try {
            super.initDomConts('svg');
            /* set default svg config */
            this.svgConf({
                version      : "1.1",
                xmlns        : "http://www.w3.org/2000/svg",
                xmlns_xlink  : "http://www.w3.org/1999/xlink",
                xmlns_sketch : "http://www.bohemiancoding.com/sketch/ns"
            });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    svgConf (cnf) {
        try {
            if (undefined === cnf) {
                /* getter */
                return this.m_svgcnf;
            }
            /* setter */
            if (undefined === this.m_svgcnf) {
                this.m_svgcnf = {};
            }
            for (let cidx in cnf) {
                this.m_svgcnf[cidx] = cnf[cidx];
            }
            this.target().attr(this.m_svgcnf);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setContents (prm) {
        try {
            this.target().text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            this.target().attr({ 'width' : ('number' === typeof prm)? prm + 'px' : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            this.target().attr({ 'height' : ('number' === typeof prm)? prm + 'px' : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mofron.comp.Svg;
/* end of file */
