# -*- coding: utf-8 -*-

import logging

from pyramid.i18n import TranslationStringFactory
from formalchemy import FieldSet, Grid  # noqa

from marionb_geomapfish import models  # noqa
from c2cgeoportal.forms import *  # noqa

_ = TranslationStringFactory("marionb_geomapfish-server")
log = logging.getLogger(__name__)
