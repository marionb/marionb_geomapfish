ifdef VARS_FILE
VARS_FILES += ${VARS_FILE} vars_marionb_geomapfish.yaml
else
VARS_FILE = vars_marionb_geomapfish.yaml
VARS_FILES += ${VARS_FILE}
endif

# The hostname use in the browser to open the application
APACHE_VHOST ?= mbaumgartner
INSTANCE_ID ?= marionb_geomapfish
TILECLOUD_CHAIN ?= FALSE
VISIBLE_WEB_HOST ?= example.com

# Deploy branch
DEPLOY_BRANCH_DIR ?= /var/www/vhosts/$(APACHE_VHOST)/private/deploybranch
GIT_REMOTE_URL ?= git@github.com:camptocamp/marionb_geomapfish.git
DEPLOY_BRANCH_BASE_URL ?= $(VISIBLE_PROTOCOL)://$(VISIBLE_HOST)
DEPLOY_BRANCH_MAKEFILE ?= marionb_geomapfish.mk

include CONST_Makefile
