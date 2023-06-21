build:
	python setup.py sdist bdist_wheel

publish:
	python -m twine upload --repository pypi dist/*
