# -*- coding: utf-8 -*-

try:
    from setuptools import setup, find_packages
except ImportError:
    from ez_setup import use_setuptools
    use_setuptools()
    from setuptools import setup, find_packages

setup(
    name="marionb_geomapfish",
    version="1.0",
    description="marionb_geomapfish, a c2cgeoportal project",
    author="camptocamp",
    author_email="info@camptocamp.com",
    url="http://www.camptocamp.com/geospatial-solutions",
    install_requires=[
        "c2cgeoportal",
    ],
    packages=find_packages(exclude=["ez_setup"]),
    include_package_data=True,
    zip_safe=False,
    entry_points={
        "paste.app_factory": [
            "main = marionb_geomapfish:main",
        ],
        "console_scripts": [
            "create_db = marionb_geomapfish.scripts.create_db:main",
        ],
    },
)
