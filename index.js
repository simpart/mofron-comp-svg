/**
 * @file  mofron-comp-svg/index.js
 * @brief common svg component for mofron
 * @author simpart
 */
const Dom = mofron.class.Dom;

/**
 * @class mofron.comp.Svg
 * @brief svg component for mofron
 */
module.exports = class extends mofron.class.Component {
    
    constructor (p1) {
        try {
            super();
            this.modname('Svg');
            
            /* init config */
            //this.confmng().add({ type:'' });

            if (0 < arguments.length) {
                this.config(p1);
            }
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

    afterRender () {
        try {
            super.afterRender();
            if (0 < this.childDom().child().length) {
                var parser  = new DOMParser();
                var doc     = parser.parseFromString(this.childDom().child()[0].value(), "image/svg+xml");
                var svgNode = doc.documentElement;
                this.rootDom()[0].getRawDom().appendChild(svgNode);
            }
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
            this.childDom().attrs(this.m_svgcnf);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    setContents (prm) {
        try {
            //this.childDom().text(prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    addPath (prm) {
        try {
            let path = new Dom({ tag:'path' });
            path.attrs(prm);
            this.childDom().child(path);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    width (prm) {
        try {
            this.childDom().attrs({ 'width' : ('number' === typeof prm)? prm + 'px' : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    height (prm) {
        try {
            this.childDom().attrs({ 'height' : ('number' === typeof prm)? prm + 'px' : prm });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
